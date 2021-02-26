Date: 2021-02-27
---

## Typescript 기초6
from [Typescript-kr](https://typescript-kr.github.io/)

### Enums
C의 그것

```ts
enum Direction {
  Up = 1,
  Down, // = 2
  Left,
  Right,
}

enum Direction {
  Up, // = 0
  Down, // = 1
  Left,
  Right,
}

// 문자열 열거형은 초기화가 필요함
enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}
```

- 열거형은 숫자와 문자를 섞어 사용할 수 있으나, 권장하지 않음
- 열거형의 초기화는 계산된 값이 입력됨. 런타임 시점에 초기화는 불가능

### 런타임에서 열거형
```ts
enum E{
  X, Y, Z
}

function f(obj; {X: number}) {
  return obj.X;
}

f(E);
```
E는 실존 객체(object)이며, E.X는 0이라는 값이 할당되어 있기 때문에 문제 없이 동작한다.

### 컴파일 시점에서 열거형
`keyof typeof`를 사용하면 컴파일 시점에 열거형의 키를 문자열로 나타내는 타입으로 가져올 수 있다.

```ts
enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}

/**
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;
```

### const 열거형
- 일반적인 열거형은 객체로 선언되므로, 불필요한 참조 비용을 제거하려면 `const enum`을 사용
- `const enum`은 컴파일 시 값이 직접적으로 들어감
- 상수형 enum만 사용 가능

### Ambient 열거형
```ts
declare enum Enum {
  A = 1,
  B,
  C = 2
}
```
일반 열거형은 초기화되지 않은 멤버가 상수로 간주하는 멤버 뒤에 있을 때, 해당 멤버(B)도 상수로 간주.
Ambient열거형은 초기화되지 않은 멤버는 항상 계산된 멤버로 간주.