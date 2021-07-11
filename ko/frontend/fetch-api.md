# fetch API

`Written: 2021-07-12`

여태까지 프론트엔드의 AJAX는 `XMLHttpRequest`만 있는 줄 알았는데 최근 `fetch API`라는 것을 알게 되었다.
PWA를 만들 때 사용되는 Service Worker가 `fetch`를 intercept해서 캐싱하므로 PWA를 만들고자 할 땐 `XMLHttpRequest`를 사용하지 않도록 주의가 필요하다(비동기 통신에 자주 사용되는 `axios`가 `XMLHttpRequest`기반으로 동작하므로 특히 주의해야 함).

- `fetch`는 Web API의 일부이다. 따라서 별도의 라이브러리 설치가 필요하지 않다는 장점을 갖는다.
- Promise를 반환해 예쁜 코드를 작성하기가 더 좋다.
- Interceptor에 대한 정의가 없다. 따라서 쿠키나 middleware를 추가하려면 직접 확장을 구현해야한다.
- HTTP error(4XX, 5XX)상태에 대해 reject하지 않는다(await catch가 불가능)
- Cache API를 이용한 캐싱을 지원한다.
- 요청에 대한 취소가 불가능하다(이 역시 별도 구현은 가능)

최근 PWA에 많은 관심을 갖고 있어 시간이 되면 써 보고 싶다.
