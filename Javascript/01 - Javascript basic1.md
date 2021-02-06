Date: 2021-02-06
---

## Javascript 기초1
from [JavaScript 재입문하기](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
기초부터 탄탄하게 다시 다지기

### Number는 부동소수점형밖에 존재하지 않는다
- [ECMA표준에 따르면]((https://262.ecma-international.org/6.0/#sec-terms-and-definitions-number-value)), `Number`는 실제로 `double`형(IEEE 754)이다
- 따라서 javascript에는 정수가 없다

마침 얼마 전에 자바스크립트 성능 향상 팁 중 하나로 소수를 정수로 바꾸는 예제가 있었다.
모든 수가 부동소수점 타입이라면 굳이 바꿀 필요가 있을까? 실제로 어떻게 바뀌는지 궁금했기 때문에 간단한 연산으로 소요 시간을 비교해 보았다.
같은 자릿수로 비교하는 것은 무리가 있기 때문에 참고하는 정도로만 사용했다.

(Firefox 86.0에 모바일용 카비레이크 i5으로 작성된 결과이며, 브라우저의 엔진 등에 의해 다른 결과가 나올 수도 있음)

```javascript
const LIMIT = 1_000_000;

let num = 1;
console.time('integer');
for (let i = 0; i < LIMIT; i++, num *= 3);
console.timeEnd('integer');

num = 1.1;
console.time('float');
for (let i = 0; i < LIMIT; i++, num *= 1.12345);
console.timeEnd('float');
```

이 연산의 결과는 다음과 같았다.
| 횟수 | 정수 | 부동소수점 |
| --- | --- | --- |
| 1 | 244ms | 245ms |
| 2 | 243ms | 238ms |
| 3 | 244ms | 242ms |
| 4 | 248ms | 244ms |
| 5 | 2379ms | 2361ms |

\* 5번은 1~4보다 10배 많은 반복문을 거친 결과이다.

예상대로 정수와 부동소수점의 성능 차이가 그다지 않았다.
기본적으로 부동소수점 연산은 정수에 비해 연산이 복잡하므로(적어도 전공공부할 때 배웠던 내용은 그렇다) 자바스크립트의 성능에 어느정도 영향은 있을 듯하다.

