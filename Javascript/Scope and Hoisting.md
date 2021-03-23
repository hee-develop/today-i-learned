Date: 2021-03-24
---

## Scope and Hoisting / 스코프와 호이스팅

ES5까지의 변수(`var`)는 함수 단위의 스코프에서 선언되었다.
즉 코드 블록(`{ }`) 내부에서 새로운 변수를 선언한다고 하더라도, 해당 변수는 함수 레벨의 스코프(가장 위)에 정의된다.

```js
(function showScope() {
  var a = 1;
  {
    var b = 2;
  }
  console.log(b)
})();
// 2
```

`var b = 2`는 내부의 블록 내에서 선언되었기 때문에 일반적인 언어라면 `console.log(b)`는 동작하지 않아야 한다.
하지만 자바스크립트는 `var b`의 선언이 `showScope` 함수 레벨로 호이스팅되었기 때문에 `console.log(b)`가 내부의 블록 내의 `b`의 값이 접근할 수 있게 된다.

즉 위의 코드는 아래와 같이 동작한다.

```js
(function showScope() {
  var a;
  var b;

  a = 1;
  {
    b = 2;
  }
  console.log(b);
})();
```

위와 같은 동작을 '호이스팅'이라고 하며, 일반적인 언어와 다른 방식으로 동작하기 때문에 혼란스러운 코드가 되기 쉽다.
때문에 ES6부터는 `let`과 `const`라는 값 정의 키워드를 추가해 블록 수준 스코프로 정의할 수 있게 되었다.

```js
(function showHoisting() {
  console.log(a); // undefined;
  var a = 123;
})();

(function showNonHoisting() {
  console.log(a); // Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
  let a = 123;
})();

(function showScope() {
  {
    var b = 2;
  }
  console.log(b); // 2
})();

(function showScope() {
  {
    let b = 2;
  }
  console.log(b); // Uncaught ReferenceError: b is not defined
})();
```

실 개발에 그다지 도움이 되는 내용은 아니지만, `let`과 `const`역시 문법적으로 추가된 구문(syntactic sugar)에 불과하다. 즉 내부적으로는 호이스팅되어 있다(다만 값이 평가될 때까지 접근할 수는 없기 때문에 실질적으로 호이스팅되지 않는 것과 같은 결과를 갖는다).

### switch문에서의 블록
switch문에서 `case`에 해당하는 구문에 들여쓰기를 하는데, 이 들여쓰기는 블록으로 구분되지 않는다. 즉 다음과 같은 경우 에러가 발생한다.

```js
switch (something) {
  case 1:
    let a = 1;
    break;
  case 2:
    let a = 2;
    break;
}
// Uncaught SyntaxError: redeclaration of let a
// note: Previously declared at line 3, column 8
```

어찌보면 당연한 얘긴데, `case`문의 내용은 중괄호로 감싸고 있지 않기 때문이다. 즉 `case`의 구문들은 모두 `switch`문의 블록 레벨에 정의되어 있으며, `switch-case`의 작동 방식에 따라 `goto`하는 방식으로 작동한다.

따라서 같은 이름의 값을 정의하고자 한다면, 중괄호로 블록을 나눠 주어야 한다.
Airbnb의 [JavaScript Style Guide](https://github.com/airbnb/javascript#comparison--switch-blocks)에서는 중괄호를 쓸 것을 권장하고 있다.
