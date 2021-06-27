# Dynamic Programming / 동적 계획법
`Written: 2021-03-24`

복잡한 문제를 간단한 여러개의 문제로 나누어 푸는 방법. 문제를 잘게 쪼갠 뒤, 작은 문제부터 차근차근 최적의 해답을 차례로 구해가는 방법이다.
이름과 방법의 관계성은 전혀 없다(Dynamic하지 않음).

작은 문제부터 차례로 해답을 구한다는 방법은 수학에서의 점화식으로 접근할 수 있다.

피보나치 수열을 예로 들면,  
3 이상의 어떠한 수 n은 n-1번째의 수와 n-2번째의 수의 합과 같다. 이는 즉
```
n > 2
F(n) = F(n-1) + F(n-2)
```
로 표현할 수 있다.

구현 방법은 여러가지가 있다.

1. 재귀를 통한 구현
재귀를 이용해 n부터 0번째까지 연산을 진행한다.

```js
function fibo(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return fibo(n - 1) + fibo(n - 2);
}
```
연산 결과를 저장(메모이제이션)하지 않고 재귀로 반복하게 되면 같은 결과를 중복해서 연산하게 된다.
이를 BigO notiation으로 표현하면 `O(2^n)`이 된다(참고링크 참고).

2. 반복문을 통한 구현
반복문을 통해 동일한 작업을 수행한다.

```js
const fibo = [];
fibo[1] = 1;
fibo[2] = 2;
for (let i = 3; i <= n; i++) {
  fibo[i] = fibo[i-1] + fibo[i-2];
}
```

### 참고 링크
- [BigO complexity](https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1176/handouts/midterm/5-BigO.pdf)
