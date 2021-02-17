Date: 2021-02-18
---

## Typescript 기초2
from [Typescript-kr](https://typescript-kr.github.io/)

### 인터페이스
- 자바의 그것

```ts
interface Config {
  color: string;
  width?: number;
  readonly height: number;
}
```

### 읽기 전용 타입
- `ReadonlyArray<T>`
  - `ReadonlyArray<number> as number[]`같이 캐스팅하는 것도 가능
- `readonly`는 프로퍼티의 읽기 전용 속성. `const`는 변수의 읽기 전용 속성.

### 초과 프로퍼티 검사
지정된 인터페이스와 관계 없는 값이 들어왔을 경우, TS는 에러를 발생시킴

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

let mySquare = createSquare({ colour: "red", width: 100 }); // colour이라는 값은 SquareConfig에 없음

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // 타입 캐스팅으로 인식시키면 에러 발생 않음

let squareOptions = { colour: "red", width: 100 }; // width는 공통값
let mySquare = createSquare(squareOptions); // 다른 변수에 할당되어 있는 값이라면 프로퍼티 검사를 하지 않으므로 에러 발생 않음
```

### 함수 타입 인터페이스
```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

### 인덱서블 타입 인터페이스
```ts
interface StringArray {
  [index: number]: string;
}

interface NUmberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}
```

### 클래스 타입 인터페이스
자바의 그것과 완벽히 일치

```ts
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}
```

### 클래스의 스태틱과 인스턴스의 차이점 (Difference between the static and instance sides of classes)
스태틱 메소드를 가진 인터페이스는, 인스턴스를 생성하기 위한 클래스에 직접 할당이 불가능하다

```ts
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32)
```

혹은

```ts
interface ClockConstructor {
  new (hour: number, minute: number);
}

interface ClockInterface {
  tick();
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
```

조금 이해하기 어려운 개념이라 실제로 쓰게 될 일이 생길 때 다시 공부하는 게 나을 것 같다.

### 인터페이스 확장(extend)
자바와 같다. 인터페이스를 다중 상속이 가능함

### 클래스를 확장한 인터페이스
인터페이스가 클래스를 상속받을 수 있음. 이 경우 멤버는 상속받으나 구현은 상속받지 않음
번역 문제인지 이해가 잘 안 되어서 원문으로 추후에 찾아보기로...
