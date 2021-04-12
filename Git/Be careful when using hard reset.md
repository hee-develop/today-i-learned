Date: 2021-04-12
---

# Git reset --hard를 쓸 땐 조심하자

커밋을 잘못해서, 아무 생각 없이 GUI로 이전 커밋으로 `git reset --hard`해 버렸다.

Changes상태의 파일이 전부 날라간 뒤에야, 무언가 잘못되었음을 느꼈다.
왜 이걸 미처 생각하지 못했을까ㅜㅜ 생각해보면 당연한건데..

`git reflog`로 복구하려 했지만, 애초에 `Uncommitted`상태는 가리키고 있는 포인터가 없기 때문에 복구가 불가능했다ㅜㅜ

`reset --hard`할 땐, `git stash`하는 습관을 길러야겠다.
reset은 `Uncommitted`파일이 대상이므로, `Untracked`파일까지 stash할 필요는 없다.
