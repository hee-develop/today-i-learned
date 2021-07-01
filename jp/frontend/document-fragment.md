# DocumentFragment

`Written: 2021-07-01`

Viewを作るときによく使われている`Fragment`とほぼ同じ役割。

### DocumentElementとの違い
- `Element`はHTML要素。つまり`root`となるタグが必要になる。
  - `document.createElement('div');`
- `DocumentFragment`は fragmentなので、`root`がいらない
  - `document.createDocumentFragment();`
- 使うときに`Fragment`か`Element`かによる性能の違いがあるわけではない。
  - rootがあるかどうかの違い(rootの数が増えるので少し違うかもだけど)
- `Element`は `innerHTML`などが使えるが、fragmentはそうではない

### template タグ
- `<template>`タグはJavascriptによるインスタンスを生成できるHTMLコードが含まれている。
- `HTMLTemplateElement`は `DocumentFragment`をもつ
