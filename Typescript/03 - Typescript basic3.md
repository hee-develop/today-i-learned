Date: 2021-02-22
---

## Typescript 기초3
from [Typescript-kr](https://typescript-kr.github.io/)

### 함수의 타이핑
```ts
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
  return x + y
};

// 변수의 타입 선언
let func: (x: number, y: number) => number; // number을 return
```

- 반환값 명시 가능. 반환값은 TS가 파악이 가능하므로 생략 가능
- 변수와 함수를 동시에 타입 선언할 필요는 없음(컴파일러 추론)

### 선택적 매개변수와 기본 매개변수
```ts
function func(firstName: string = 'hee', lastName?: string) {
  return `${firstName} ${lastName}`;
}
```

선택적, 혹은 기본 매개변수를 무조건 뒤로 미룰 필요는 없음
```ts
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result = buildName(undefined, "Adams"); // Will Adams
```

### 나머지 매개변수
```ts
function func(x: string, ...y: string[]) {
  return x + ' ' + y.join(' ');
}
```

### this 매개변수
매개변수로 `this: ??`를 넣어주는 것으로 `this`의 타입을 지정할 수 있음

### 타입 시스템에서의 다른 결과값을 반환하기
정적 언어에서 상황에 따라 여러 타입의 값을 반환하는 것은 불가능
여러 타입을 반환할 필요가 있다면 오버로드를 해서 구현

```ts
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any { }
```

예제에선 `Array<object>`타입을 인자로 받으면 `number`를 반환하고,
`number`타입을 인자로 받으면 `object`타입을 반환함
`pickCard(x): any`는 오버로드 대상이 아님. 즉 언급되지 않은 타입으로 대상을 부르면 오류 발생
