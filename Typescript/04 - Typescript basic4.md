Date: 2021-02-24
---

## Typescript 기초4
from [Typescript-kr](https://typescript-kr.github.io/)

### 리터럴 타입 좁히기(Literal Narrowing)
무한한 수의 잠재적 케이스들을 유한한 수의 잠재적 케이스로 줄여나가는 것을 의미
예: `const hello = 'hello';`는 `'hello'`라는 값으로 고정(1개의 유한한 케이스)됨

### 리터럴 타입

```ts
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

```

type은 갑자기 어디서 나오신건가요....

### 유니언 타입

```ts
function padLeft(value: string, padding: string | number) {
  // ...
}

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// 오류
pet.swim();
```
`pet`은 아직 타입이 정해지지 않았으므로, 공통되지 않은 프로퍼티를 실행시키는 것은 불가능함

### 유니언 구별하기
```ts
type NetworkLoadingState = {
  state: 'loading';
};

type NetworkFailedState = {
  state: 'failed';
  code: number;
};

type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function networkStatus(state: NetworkState): string {
  switch (state.state) {
  case 'loading':
    return 'Downloading...';
  case 'failed':
    return `Error ${state.code} downloading`;
  case 'success':
    return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}
```

### 교차 타입
유니언과 달리, 말 그대로 둘을 결합한 타입

```ts
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
```

