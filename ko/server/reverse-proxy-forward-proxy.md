# Reverse Proxy와 Forward Proxy의 차이

`Written: 2021-06-29`

## Proxy
클라이언트가 자신을 통해 다른 네트워크에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템, 혹은 응용 프로그램.  
대리로 통신하는 작업은 '프록시', 그 중계 기능을 하는 것을 '프록시 서버'라고 부른다.

![프록시 개념도](https://docs.microsoft.com/en-us/iis/extensions/configuring-application-request-routing-arr/creating-a-forward-proxy-using-application-request-routing/_static/image1.jpg)
출처: https://docs.microsoft.com/en-us/iis/extensions/configuring-application-request-routing-arr/creating-a-forward-proxy-using-application-request-routing

## Forward Proxy
일반적으로 프록시라고 불리는 개념. 클라이언트의 요청을 받아 서버에 대신 전달해주는 방식.  
**인터넷보다 프록시 서버를 먼저 호출하게 되면 포워드 프록시**

## Reverse Proxy
이름 그대로 '반대로 된' 프록시. 서버의 요청을 받아 클라이언트에 대신 전달해주는 방식.  
**프록시 서버를 먼저 호출**

여러 대의 서버의 요청을 대신 전달해주는 기능을 갖고 있기 때문에, 일종의 스위치 같은 역할을 하며, 나아가 로드밸런싱도 가능함

## 프록시 서버를 사용하는 이유
1. 보안
    - 서로 프록시 서버를 거치기 때문에 IP를 숨길 수 있는 방법이 생김
2. 성능
    - 프록시 서버는 캐싱이 가능하므로 불필요한 요청을 생략할 수 있다.
    - 로드 밸런싱 기능을 수행할 수 있으므로 트래픽을 분산시킬 수 있다.
