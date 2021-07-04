# 객체의 키를 타입으로 선언하기 : keyof typeof

`Written: 2021-07-04`

오브젝트의 키를 타입으로 지정하고 싶을 땐 `keyof typeof` 키워드를 사용하면 된다.

```ts
const obj = {
  key1: 10,
  key2: 20,
};

let key: keyof typeof obj;
// key가 가질 수 있는 값은 `key1`과 `key2`로 제한됨

const value = obj[key]; // obj의 key를 값으로 갖고 있으므로 `any`에 관련된 경고가 출력되지 않음
```

### 어떻게 동작하는 걸까?
자바스크립트의 `typeof` 키워드는 대상 객체의 타입을 반환한다. 즉, `typeof obj`의 값은 `'object'`이다. 그럼 `keyof 'object'`가 되는 셈인데 이게 왜 움직이는걸까?

답은 타입스크립트의 `typeof`는 자바스크립트 그것과 동작이 조금 다르기 때문이다. 타입스크립트의 `typeof` 키워드는 두 가지 방법으로 사용할 수 있다.

1. 런타임에서 사용
    런타임에서 사용하면 자바스크립트와 같은 동작을 보여준다. 즉 `typeof obj`는 `'object'`를 반환한다.
    ```ts
    const a = typeof obj; // == (a = 'object')
    ```
2. 타입 추론에서 사용
    두 번쨰는 타입 추론에서 사용하는 방법이다. 위 예제에서 사용된 `typeof`는 런타임 키워드가 아니고 컴파일 시에 추론되는 `type`을 반환하도록 되어 있다. 즉 예제의 `typeof obj`는 `'object'`를 반환하는 것이 아니고 `obj`의 타입을 반환하게 된다.
    ```ts
    type A = typeof obj; // == { key1: number, key2: number }
    ```
    1번에서는 `const`에 값을 넣었지만 2번에서는 `type`에 값을 대입하고 있는 것을 볼 수 있다.

타입 선언은 타입스크립트의 문법으로, 말 그대로 타입을 선언하는 것일 뿐이다. 따라서 트랜스컴파일 시에는 사라지는 값이며, 때문에 런타임 중에 수정할 수 없다. 즉 런타임 도중에 수정되는 키를 타입으로 선언하는 행위는 불가능하다.

쓰면서 조금씩 익혀가고 있는데 역시 탄탄하게 다지고 난 뒤에 쓰는 게 이해가 더 잘 될 것 같다. TS는 정적 언어와 동적 언어의 장점을 모두 가진 매력적인 언어라고 생각한다. 일이 좀 진정되면 천천히 공부해 보고 싶다.

### 참조
https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
