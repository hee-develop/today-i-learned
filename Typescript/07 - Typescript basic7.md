Date: 2021-02-28
---

## Typescript 기초7
from [Typescript-kr](https://typescript-kr.github.io/)

### 제네릭
제네릭. 템플릿.

```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity('myString'); 추정이 가능하면 생략 가능
```

### 제네릭 제약조건 (Generic Constraints)
해당 제네릭이 프로퍼티를 가짐을 증명하기 위해서 `interface`를 사용

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

`T` 는 `Lengthwise`를 포함하고 있기 때문에, `length`가 없는 객체는 오류가 발생(예: `number`타입)
