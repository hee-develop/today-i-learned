# .gitignore 대상 폴더를 gh-pages를 이용해 배포하기

`Written: 2021-07-02`

### git subtree를 이용한 배포
이전까지는 Github pages에 배포할 때 컴파일 된 파일들(보통 `/dist`나 `/build`등)을 git에서 추적하게 한 뒤, subtree를 이용해 배포했었다.  
subtree를 이용하면 해당 subtree는 정적 파일만 볼 수 있게 되므로 깔끔하게 github page를 적용할 수 있다.

다만 subtree의 대상은 결국 브랜치에는 남아 있게 된다. 그대로 두어도 별 문제는 없지만 되도록 완벽하게 나누고 싶었기 때문에 `.gitignore`를 이용해 컴파일된 파일들을 제외시켜 보았다.  
당연하게도 git에서 제외되었기 떄문에 subtree가 해당 파일을 찾을 수 없게 되었고.. 아래와 같은 에러가 발생했다.

```bash
% git subtree push --prefix build/ origin main
No new revisions were found
```

### `gh-pages`를 이용한 배포
npm 패키지 중에 [gh-pages](https://github.com/tschaub/gh-pages)라는 것이 있다. 글자 그대로 github pages에 배포를 대신해주는 패키지이다. 이를 이용하면 `.gitignore`에 있는 파일, 폴더라도 배포가 가능하다.

내부 코드를 살펴보면 결국 같은 위치에서 로컬의 git을 이용하고 있는데 어떻게 `.gitignore`를 무시하고 있는지는 잘 모르겠다.

어찌됐든 gh-pages를 이용해 배포하면 문제 없이 배포가 가능하다.

```
% npx gh-pages -d build
```
`-d` 옵션을 지정해 배포할 폴더를 지정할 수 있다.
`-b` 옵션을 이용하면 브랜치 이름을 지정할 수 있다(기본 gh-pages).

### 이미 브랜치가 있다며 배포가 안될 때
캐시를 초기화하면 문제가 해결된다.

```
rm -rf node_modules/.cache/gh-pages
```

`rm`을 쓸 때는 언제나 조심.
