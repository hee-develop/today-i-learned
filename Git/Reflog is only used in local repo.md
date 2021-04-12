Date: 2021-04-13
---

# Git reflog는 로컬 저장소의 변경 값을 저장하는 로그이다

git-scm.com의 설명에 다음과 같이 적혀 있다.

> Reference logs, or "reflogs", record when the tips of branches and other references were updated in the local repository.
> Reference logs, 또는 "reflogs"는 로컬 저장소에서 브랜치가 변경될 때 및 기타 참조(포인터)가 변경될 때를 기록합니다.

로컬 저장소에서 포인터(언급은 안 되어있지만 로컬 레포에서의 포인터면 HEAD인 것 같다)가 변경될 때 로그가 남는다고 적혀 있다. 즉 원격 저장소에는 `reflog`는 남지 않는다.

자신의 git 프로젝트를 원격 저장소에 푸시한 뒤, `git clone`해 `git reflog`를 해 보면 알 수 있다.

`git log`는 커밋에 대한 로그이므로 원격 저장소에도 남는다.

참고 : https://git-scm.com/docs/git-reflog
