# DocumentFragment

`Written: 2021-06-20`

개발에서 흔히 사용되는 Fragment와 같은 역할.

### DocumentElement와의 차이
- `Element`는 원소이므로 `root`가 되는 태그가 필요하다.
  - `document.createElement('div');`
- `DocumentFragment`는 fragment이므로, `root`가 되는 태그가 필요 없다.
  - `document.createDocumentFragment();`
- `Fragment`를 쓴다고 해서 성능에 이점이 있는 것은 아니다.
  - root가 있느냐 없느냐의 차이
- `Element`는 `innerHTML`등을 사용할 수 있지만, fragment는 그렇지 못하다

### template 태그
- `<template>`태그는 Javascript에 의해 인스턴스를 생서할 수 있는 HTML코드를 담음.
- `HTMLTemplateElement`는 `DocumentFragment`를 가짐
