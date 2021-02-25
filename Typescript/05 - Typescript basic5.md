Date: 2021-02-25
---

## Typescript 기초5
from [Typescript-kr](https://typescript-kr.github.io/)

### 클래스의 비공개 필드
비공개 필드를 쓸 수 있다는 사실 자체를 모르고 있었는데, 자바스크립트에서 이미 구현되어 있는(ES2019) 기능이었다.

```ts
class Animal {
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
}
```

혹은 일반적인 `private`를 붙여 표기하는 것도 가능하다.

### private
`private` 프로퍼티는 덕 타이핑이 되지 않음

```ts
class Animal {
  private name: string;
}

class Human {
  private name: string;
}

let animal = new Animal();
let human = new Human();
animal = human; // Human.name은 Animal.name과는 다른 속성(이름만 같음)이므로 대입이 불가능함
```

### protected
C++의 그것

### readonly
선언 혹은 생성자에서 반드시 초기화해야만 함

### 매개변수 프로퍼티(Parameter properties)
`public` `protected` `private` `readonly`를 붙여 매개변수를 선언하면, 클래스에 자동으로 프로퍼티를 추가해 줌

```ts
class Human {
  readonly numberOfLegs: number = 2;
  constructor(readonly name: string) {
  }
  // readonly name: string 을 선언함과 동시에 초기화
}
```

### 추상 클래스
자바와 비슷한 문법.

```ts
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('move');
  }
}
```
