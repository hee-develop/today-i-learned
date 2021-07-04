# オブジェクトのキーをタイプとして宣言する : keyof typeof

`Written: 2021-07-04`

オブジェクトのキーをタイプとして使いたい場合は、`keyof typeof`を使うと良い。

```ts
const obj = {
  key1: 10,
  key2: 20,
};

let key: keyof typeof obj;
// keyが持てるのは`key1`と`key2`のみ

const value = obj[key]; // objのkeyを値として持っているため、タイプエラー(`any`)がでない
```

### なぜ動くの？
javascriptでは`typeof obj`は`'object'`を返す。では、これは`keyof 'object'`と同じことになるはずだが、なぜ動くのだろう？

答えは、これはタイプ宣言で使われているからだった。TSの`typeof`はJSのあれとは挙動が少し異なる。TSの`typeof`は２つの使い方がある。

1. runtimeに使う
    こうするとJSと同じ挙動になる。つまり`typeof obj`は`'object'`を返す。
    ```ts
    const a = typeof obj; // == (a = 'object')
    ```
2. タイプ宣言に使う
    タイプを宣言する時に`typeof`を使うと、対象の本当のタイプを返す。上記の`typeof`は、よく見るとタイプを宣言するときに使われている。つまり、例の`typeof obj`は`obj`のタイプを返す。
    ```ts
    type A = typeof obj; // == { key1: number, key2: number }
    ```
    １番では`const`に値を入れているが、２番は`type`に値を入れている。

タイプ宣言はTSの文法で、文字通りタイプについて述べるだけ。だからトランスコンパイルの際には無くなるもので、ランタイムの際に修正できない値である。こういうことでランタイムの途中足されたりするキーをタイプとして宣言することは不可能だ。

業務で使いながら習っている感じだけど、やはり基礎からしっかり勉強しておいた方が効率よく使えそうな気がする。TSは静的言語と動的言語の良い点を持っている魅力的な言語だと思う。落ち着いたらゆっくり勉強してみたい。

### Reference
https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
