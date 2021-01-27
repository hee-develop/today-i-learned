Date: 2021-01-27
---

## Git 기초3
from [Pro git](https://git-scm.com/book/en/v2) 3.1~
기초부터 탄탄하게 다시 다지기

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
