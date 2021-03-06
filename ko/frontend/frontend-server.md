# Frontend Server

`Written: 2021-06-30`

고전적인 웹 페이지는 백엔드 서버에서 렌더링한 뒤 결과물을 반환하는 구조를 갖고 있었다.

그러다 AJAX 기능이 추가되며 점차 화면의 역할이 늘어나고 서버의 부담을 줄이는 방향으로 흘러가게 되었다.

그리고 React, Vue와 같은 모던 프론트엔드 프레임워크가 등장함에 따라, 드디어 모든 렌더링을 프론트엔드에서 담당하는 시대가 도래했다.

그러나, 이러한 방식엔 몇 가지 문제가 있다.
1. 프론트엔드에서 모든 렌더링을 담당하게 되기 때문에, 모든 화면을 렌더링할 수 있도록 코드를 미리 받아두어야만 했다. 아직 보여지지도 않은 화면을 표시할 코드까지 불러와야 하므로, 로딩 시간이 기존의 배 이상 걸리는 경우가 잦았다. 즉, 초기 로딩에 많은 시간이 소요되므로 고객이 이탈할 확률이 높아진다.
2. 프론트 엔드 렌더링은 Javascript를 기반으로 움직인다. 즉 초기 화면은 빈 공간에서부터 시작하며, DOM이 동적으로 추가되는 구조를 가진다. 검색 엔진의 크롤러는 성능 측정 등을 이유로 Javascript를 비활성화 하거나, 제한을 걸어 두는 경우가 많다. 
Javascript의 움직임을 제한하게 되면, 프론트엔드 프레임워크가 제 기능을 못하게 된다. 따라서 크롤러가 보고 있는 화면은 아무 데이터도 표시되지 않는, 빈 화면이 확률이 높다. 이게 무슨 말이냐면, 크롤러가 빈 화면으로 이해해 버리고 검색 우선순위를 낮출 가능성이 높다. 즉, SEO(검색 엔진 최적화)에 불리해진다.

1번의 문제는, 동적 `import` 가 가능해진 모던 브라우저 덕분에 코드 스플리팅을 통해 어느 정도 성능 향상을 이루어 내었다. 그러나 2번의 문제는 프론트사이드 렌더링에서는 극복하기 어려운 문제이다.

그래서 최근엔 고전적인 서버사이드 렌더링과, 프론트사이드 렌더링을 조합한 방식을 채용하는 경우가 많아졌다.
그리고 이런 작업을 대신 해 주는 프레임워크는 `Next`나 `Nuxt` 등이 있다.

요즈음의 프레임워크는 CSR(Client-Side Rendering)과 SSR(Server-Side Rendering)을 지원하며,  
최근엔 더 나아가서 SSG(Static Site Generator)를 지원해 Server-Side에서의 Rendering을 하지 않고(트랜스컴파일 시 1회 제외) 페이지를 표시하는 방법도 등장했다.

---

처음엔 BFF(Backend For Frontend)가 이 개념을 뜻하는 줄 알았는데 전혀 다른 의미였다.
프론트엔드 세계는 정말 변화가 빠르고 범위가 너무 넓은 것 같다..
