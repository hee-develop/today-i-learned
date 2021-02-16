Date: 2021-02-17
---

## Typescript 기초1
from [Typescript-kr](https://typescript-kr.github.io/)
트렌드 따라잡기

### 타입을 갖는 Javascript
- 동적 프로그래밍을 지원하는 자바스크립트는 하나의 변수에 수많은 타입의 데이터를 넣을 수 있음
- 타입이 없는 프로그래밍은 유연하지만 의도하지 않은 값을 넣는 등의 행위가 발생할 수 있음. 이를 대체하기 위해 타입스크립트가 등장
- Typescript는 자체로는 사용이 불가능하며, 컴파일해 Javascript 결과물을 활용함
- 문법 자체는 일반적인 정적 언어와 비슷한 느낌?

### Unions
여러 타입 중 하나임을 선언하는 방법

```typescript
type myBool = true | false;
type windowStates = 'open' | 'closed' | 'minimized';
```

JSDoc과 같은 사용 방식(JSDoc이 이쪽 방법을 따르는 걸수도)

### Generics
자바의 그것, 혹은 C++의 템플릿과 같음

```typescript
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;
const object = backpack.get();

// string타입에 number를 넣고 있으므로 불가능
backpack.add(23);
```

### 구조적 타입 시스템(Structural Type System)
- 타입 검사는 값이 있는 형태에 집중. 즉 두 객체가 같은 형태를 가지면 같은 것으로 간주됨
- 같은 형태를 가진 값이 있다면 다른 값이 있어도 상관 없음

```typescript
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}/${p.y}`);
}

const rect = {x: 1, y: 2, width: 3, height: 4}; // Point와는 관계 없는 값을 포함함

printPoint(rect); // Point타입이 아님에도 불구하고 x, y값을 갖고 있기 때문에 1/2가 출력됨
```

### 타입 선언
- 배열을 선언할 때는 타입 뒤에 배열임을 선언하는 방법(`number[]`)과, 제네릭 배열 타입을 쓰는 방법(`Array<number>`) 둘 다 가능
- 타입과 개수를 고정시켜 선언하면 튜플 타입으로 사용 가능(`[string, number]`)
  - 당연한 얘기지만 실제 튜플은 아님
- 열거형(`enum`)타입 제공
- 알 수 없는 타입은 `any`타입을 사용
- 전체의 타입을 알고있는 것이 아닐 경우에도 `any`를 사용
- 반환 값이 없을 때 `void`를 반환; 실질적인 값은 `undefined`와 같다
- `never`를 반환하는 함수는 함수의 끝에 도달하지 못함을 의미(예외처리가 발생하거나 무한 루프 등)
- 원시 타입이 아닌 객체를 나타낼 때는 `Object`가 아닌 `object`를 사용(`Object`는 `object`의 프로토타입 개념이므로 지정된 함수 등을 실행시킬 수 없다)

### 타입 단언(Type assertions)
```typescript
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
```
- JSX와 함께 사용하면 `as-`스타일만 허용
