# HTTP 상태 코드

`Written: 2021-07-11`

- 200 OK
- 201 Created
- 202 Accepted
- 204 No Content
- 206 Partial Content

3XX는 변경된 경로 지정 필수.
- 301 Moved Permanetly
- 304 Not Modified : 마지막 요청 이후 리소스에 변화가 없음을 의미. 캐시로 redirect

4XX는 Client측 오류. 단순 오류일 수도 있고, 값이 부족한 경우일 수도 있다.
- 400 Bad Request : 요청에 무언가 오류가 있어 서버에서 처리할 수 없음
- 401 Unauthorized : 의미상 인증되지 않음(Unauthenticated)에 가까움. 로그인하지 않았을 경우 발생
- 403 Forbidden : 해당 요청에 대한 권한이 없음. 로그인은 되어 있으나, 유저의 권한상 접근이 불가능할 경우 발생
- 404 Not Found : 요청받은 리소스를 찾을 수 없음. 잘못된 경로
- 408 Request Timeout : 연결은 성사(Acknowledged)되었으나 클라이언트의 요청이 아직 서버에 도달하지 않은채 상당한 시간이 흘러, 서버에서 요청을 거부함

5XX는 Server측 오류. 서버에 문제가 생겼거나, 혹은 다운되었을 경우.
- 500 Internal Server Error : 서버에서 어떠한 문제가 발생해 처리가 불가능함
- 502 Bad Gateway : 서버가 유효하지 않은 응답을 받았음. 유효하지 않은 응답이라는 것은, 다운되어 아예 반응이 없는 경우도 포함됨. 여기서 서버는 보통 게이트웨이 혹은 프록시 서버를 의미하고, 이 서버에 응답을 보내는 것은 (브라우저)클라이언트가 아닌 실제 서버를 의미함.
- 503 Service Temporarily Unavailable : 서비스를 일시적으로 사용할 수 없음. 과도한 요청 혹은 무거운 작업으로 인해 서버가 일시적으로 반응이 늦어지고 있음을 의미함.
- 504 Gateway Timeout : 게이트웨이 혹은 프록시 서버가 클라이언트(연결되어 있는 백엔드 애플리케이션)로부터 주어진 시간 내에 응답을 받지 못했음을 의미함.


[418 I'm a teapot 이라는 응답 코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/418)도 있다.