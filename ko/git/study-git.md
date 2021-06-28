# Git 공부한 내용 정리

이미 알고있는 내용은 제외하고 기초부터 탄탄하게 다시 다지기

## 2021-01-25
from [Pro git](https://git-scm.com/book/en/v2) 1.1 ~ 2.3

### Git에는 삭제가 없다
- 일단 tracking이 시작되면 해당 파일을 삭제하더라도 로그가 남으므로 파일 복구가 가능하다.

### `.gitignore`의 패턴 규칙
- `/`로 시작하면 **하위 디렉토리에는 적용되지 않는다**
- `/`로 끝나면 디렉토리를 의미
- `!`로 시작하면 해당 패턴은 무시하지 않는다
- Glob패턴(쉘의 정규표현식?) 지원

### CLI - diff 명령어
- diff는 Unstaged상태의 파일만 비교
- Staging Area의 파일을 비교할 때는 `--staged` 혹은 `--cached`을 사용한다

### CLI - `git rm`과 `rm`
- 실질적으로 삭제되는 (커밋이 추가되는) 것에는 차이가 없음
- 파일은 삭제하지 않고 Untracked상태로 변경하고 싶은 경우에는 `--cached`옵션을 사용한다
  - `git rm --cached [something]`
  - `*`이 아니라 `\*`을 사용

### CLI - `git log`의 사용법
- 가장 최근의 커밋부터 순차적으로 표시
- 각 커밋의 diff를 볼 때는 `-p`/`--patch`옵션을 사용
- `-2`등을 사용하면 최근 두 개만 표시
- `--graph`옵션으로 아스키 그래프를 출력 가능
- `-S`옵션을 사용하면 커밋 내부의 텍스트를 검색


## 2021-01-26
from [Pro git](https://git-scm.com/book/en/v2) 2.4~

### 커밋에 변경을 추가
- `--amend`옵션을 사용. 파일 변경 이력과 메시지를 동시에 수정 가능
- 커밋을 추가하는 게 아닌 '교체'하는 작업이므로 실질적으로 남는 커밋은 1개뿐

### Unstage상태로 변경
- `git reset HEAD <file>` : Staged -> Unstaged
- `git checkout -- <file>` : Modified -> Unstaged

### Git tag
- `git tag -a <version> -m <message>`
- `-a`옵션이 붙으면 Annotated, 없으면 Lightweight(해당 커밋을 가리키기만 함)
- `git push origin <tag>`
- `git checkout <version>`으로 해당 지점으로 이동 가능
- 태그로 checkout하는 경우 `detached HEAD`상태가 되어 기존 커밋들과의 연결이 끊어짐
- 따라서 해당 지점으로부터의 fix는 브랜치를 새로 만들어야만 함

### Git의 동작 원리
- 1장에서도 나와있듯 Git은 변경사항 기록이 아닌 **스냅샷 기록**
- 스냅샷으로 이정도 용량을 구현할 수 있나? 싶어서 찾아보니 [**실제로는 스냅샷과 델타를 동시에 사용**한다고 한다](http://dogfeet.github.io/articles/2012/git-delta.html)
- Rebase는 말 그대로 `base`를 한쪽 브랜치로 변경하는 것
- Cherry-pick도 말 그대로 특정 커밋과 해당 커밋의 부모와의 델타를 구해 대상 브랜치에 적용(`cherry-pick`)하는 것
- commit하면 파일Blob, 트리 개체, 트리의 root를 가리키는 포인터가 담긴 커밋 객체가 생성됨
![commit상세](https://git-scm.com/book/en/v2/images/commit-and-tree.png)

### Branch
- 가지(branch)로 표현되지만 결국 branch도 포인터에 불과
- commit은 이전 commit을 가리키는 포인터를 포함(단방향)하므로 가지처럼 표현이 가능하게 된다


## 2021-01-27
from [Pro git](https://git-scm.com/book/en/v2) 3.1~

### Branch & Merge
- `HEAD`포인터는 작업 중인 로컬 브랜치를 가리킨다
- 부모가 같지만 수정 내용이 다른 두 커밋을 merge할 때 `'recursive' strategy`로 합쳐지게 된다<br>
  이 방식을 3-way merge(target1, parent, target2)라고 한다
- merge되지 않은 브랜치는 `git branch --no-merged` 명령으로 확인 가능

### Remote Branch
- `fetch`는 포인터를 추가하는 것 뿐이므로, 해당 브랜치를 선택해 수정하려면 `checkout`이 필요하다
- `git checkout -b <localname> <remotename>`
- 혹은 `--track`옵션으로 간략하게 쓸 수도 있다. `git checkout --track <remotename>`
- `git branch -vv`로 로컬/리모트 브랜치를 확인할 수 있다
- `git push <remote> --delete <remoteBranchName>`으로 리모트 브랜치를 삭제할 수 있다

### Rebase
- 커밋을 깔끔하게(다수의 지저분한 커밋을 하나로 뭉친다는 의미가 아님) 만들 때 유용
- merge와 달리 **부모 브랜치의 값과 관계 없이, 브랜치의 변경값만 적용할 수 있음**
- 예시에서는 `git rebase --onto <A> <B> <C>`. `A`를 기준으로 `B`와 `C`의 공통부모까지의 커밋을 제외할 수 있다

![rebase sub-branch](https://git-scm.com/book/en/v2/images/interesting-rebase-2.png)

`client`기준으로 `C2`부터의 변경분은 반영되지 않으므로 `C8`, `C9`만 반영됨
- man페이지를 확인해보니 적용 범위를 지정하는 것도 가능한 모양
```
  E---F---G---H---I---J  topicA

then the command

  git rebase --onto topicA~5 topicA~3 topicA

would result in the removal of commits F and G:

  E---H'---I'---J'  topicA
```
~5를 기준으로 ~3부터 ~1범위의 커밋을 적용하는 예

Rebase는 내일 이어서
