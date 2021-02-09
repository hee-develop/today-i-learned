Date: 2021-02-09
---

## 불변 객체
ES6부터 `const`를 이용해 상수를 선언할 수 있게 됐지만, 객체는 직접적인 할당이 아닌 참조이므로 `const`로 선언해도 값을 변경할 수 있다는 문제가 있다.
그리고 이러한 불변성을 인식하지 못한 채 값을 전달해 의도치 않은 값의 변경이 일어나는 경우가 빈번하다(최근 JS진영에서 함수형에 대한 수요가 급증한 주된 이유가 아닐까 싶다).

이렇게 의도치 않은 값의 변경을 어떤 식으로 막을 수 있을까?

## 객체 복사
**객체 자체를 복사해, 의도치 않게 값을 변경하더라도 원본에 영향을 주지 않게**끔 하는 방법이다.
함수형 사고 방식에서 많이 언급되는 내용인 것 같다.
보통 `Object.assign`을 사용하거나 spared operator(`{...obj}`) 등을 이용해 복사하는 방법을 사용할 수 있다.
허나 위 두 방법만으로는 nested object에 대해 deep copy가 이루어지지 않는다는 문제점이 있다.
보통 lodash같은 라이브러리를 이용해 복사한다.

### 복사의 비용?
구체적으로 확인은 못 해봤지만, lodash의 cloneDeep같이 nested object도 deep copy를 하는 메소드의 [내부를 확인해 보면 결국 모든 데이터에 대해 값을 복사해 반환하는 구조](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11087)로 되어 있기 때문에, 큰 객체를 복사하는 것은 바람직하지 않아 보인다.

## 객체 불변화
객체를 읽기 전용으로 변경해, 값을 변경하지 못하게 하는 방법이다.
자바스크립트의 `Object.freeze`메소드를 사용하면 객체를 읽기 전용으로 변경시킬 수 있다.
문제점은 객체 복사와 같이 적용 범위는 대상 object의 프로퍼티 뿐이라는 것(nested object에 대해서는 불변화하지 않음)이다.
이 역시 직접 구현하는 것은 오래 걸리므로 라이브러리(Immutable.js)의 도움을 받는 것이 좋다.

## 참고
- [객체와 변경불가성(Immutability)](https://poiemaweb.com/js-immutability?fbclid=IwAR37euGK_rRr34Q0lCYJ3ctFIj5gCb8GpVYw85vBisD3BO8vOFitaiEQ96M)
- [Any performance benefit to “locking down” JavaScript objects?](https://stackoverflow.com/questions/8435080/any-performance-benefit-to-locking-down-javascript-objects) : 윗글에서 `Object.freeze`가 성능 이슈가 있다는 얘기가 있어 찾아 보았다.
