# 모든 런타임 에러 캐치하기

`Written: 2021-03-13`

브라우저에서 던져지는 에러는 런타임에서 `catch`한다. 이 에러는 `window`객체에 이벤트 리스너를 추가하는 것으로 다룰 수 있다.

```js
window.onerror = function(message) {
  alert(message);
};
```

브라우저의 콘솔에 직접 입력하는 것으로도 바로 확인할 수 있는데, 한 가지 주의해야 할 것이 있다.  
브라우저의 콘솔에서 발생하는 에러는 `window`에 던져지지 않고 콘솔 내부에서 처리되기 때문에, 아래와 같이 동기적인 코드를 작성하면 `onerror` 이벤트는 발생하지 않는다.

```js
window.onerror = function(message) {
  alert(message);
}

throw new Error('hi!');
```

이를 동작시키려면 비동기(이벤트 큐 / 마이크로태스크 큐)로 에러를 던져 주면 된다.

```js
window.onerror = function(message) {
  alert(message);
}

setTimeout(() => { throw new Error('hi!'); }, 0);
```

### 주의할 점
당연한 얘기겠지만, 누군가 에러를 처리했다면(`try-catch`), 해당 에러는 런타임에게 던져지지 않고 소멸된다.  
별 것 아닌 것 같지만 Sentry같은 에러 수집 도구가 등록이 되어 있다면 에러 수집이 불가능하므로 주의가 필요하다.

```js
window.onerror = function(message) {
  alert(message);
}

setTimeout(() => {
  try {
	  throw new Error('hi!');
  } catch (e) {
    return; // 여기서 에러가 소멸됨
  }
}, 0);
```

이는 다시 `throw`하는 방법으로 쉽게 해결이 가능하다(에러 처리를 두 번 하는 셈이 되어 버리지만..).

### 참고 링크

https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
https://qiita.com/att55/items/4486f8cadb339d9b03f1
