Date: 2021-02-20
---

## Duck typing

동적 타이핑의 한 종류. **객체의 변수 및 메소드의 집합이 객체의 타입을 결정**하는 것
클래스, 인터페이스 등으로 타입을 나누는 것이 아닌, 어떠한 프로퍼티 혹은 메소드를 가지고 있으면 해당 타입에 속하는 것으로 간주

타입에 대해 비교적 자유롭기 때문에, 편하며, **행위 본질에 집중**할 수 있다는 장점을 갖고 있다.
그러나 해당 대상이 없는 객체에서 대상을 부르려고 하게 되는 경우 런타임 오류가 발생할 수 있다는 단점 역시 존재한다.

동적 언어라면 상당히 쉽게 표현되는 개념이지만, 정적 언어에서는 쉽게 만들기 어려운 개념.

```js
class Duck {
  quack() {
    console.log('Duck Quack');
  }
}

class Person {
  quack() {
    console.log('Person Quack');
  }
}

function sayQuack(quackable): void {
  quackable.quack();
}

sayQuack(new Duck()); // Duck Quack
sayQuack(new Person()); // Person Quack
```

javascript 하는 사람들이 보면 당연한 거 아닌가? 라는 생각이 들지도 모르겠다..
`Duck`과 `Person`은 아무런 연관성이 없는 클래스임에도 불구하고, `sayQuack`에 의해 불리어 `quack`메소드를 실행하고 있다.
이는 `sayQuack`의 `quackable`의 타입이 무엇이든(설사 `number`타입이더라도) `quack` 메소드를 부르는 행위에 관심을 갖고 있기 때문에 가능하다.

정적 언어에서 이러한 행위를 비슷하게 구현하는 건 상당히 어려워 보인다..

`Duck`은 `Quackable`을 구현해 만든 클래스로 `quack`메소드가 존재한다.
`Person`은 `Quackable`을 구현하지 않은 클래스임에도 불구하고, 자체적으로 `quack`메소드를 구현해 놓았다.

### 참고 링크
- https://ko.wikipedia.org/wiki/%EB%8D%95_%ED%83%80%EC%9D%B4%ED%95%91
- [What's an example of duck typing in Java?](https://stackoverflow.com/questions/1079785/whats-an-example-of-duck-typing-in-java)
