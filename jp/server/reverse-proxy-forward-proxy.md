# Reverse Proxyと Forward Proxyの違い

`Written: 2021-07-01`

## Proxy
クライアントが自分を通して他のネットワークに間接的に接続できるようにするシステム、もしくは応用プログラム。
通信行為そのものは「Proxy」、その機能を持つものは「Proxy server」と呼ぶ。

![プロキシの概念](https://docs.microsoft.com/en-us/iis/extensions/configuring-application-request-routing-arr/creating-a-forward-proxy-using-application-request-routing/_static/image1.jpg)
출처: https://docs.microsoft.com/en-us/iis/extensions/configuring-application-request-routing-arr/creating-a-forward-proxy-using-application-request-routing

## Forward Proxy
普段プロキシと呼ばれているもの。クライアントの要請をもらい、サーバーに代わりに伝えてくれる方法。 
**インターネットよりプロキシサーバーを先に呼ぶとフォワードプロキシ**

## Reverse Proxy
名前通り「逆」プロキシ。サーバーのリクエストを代わりにクライアントの方に送る方法。
**プロキシを先に呼ぶ**

多数のサーバーのリクエストを送る機能が入っているため、スイッチの方な役割ができる。ひいては、ロードバランシングもできるようになる

## プロキシサーバーを使う理由
1. セキュリティ
    - 互いに直接リクエストしないので、IPが隠せる
2. パフォーマンス
    - プロキシサーバーはcacheが使えるため、同じリクエストはサーバーまで行かなくてもすぐ返せる。
    - ロードバランシング機能でトラフィックを分散できる。
