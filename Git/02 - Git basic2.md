Date: 2021-01-26
---

## Git 기초2
from [Pro git](https://git-scm.com/book/en/v2) 2.4~
기초부터 탄탄하게 다시 다지기

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

branch는 내일 이어서
