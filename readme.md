# EISHIN's Coding Set

受託制作では本コーディングセットを使用してコーディングを進めていきます。

## 使用するツールについて

- [Node.js](https://nodejs.org/ja/)
- [npm](https://docs.npmjs.com/about-npm)
- [yarn](https://classic.yarnpkg.com/lang/en)
- [webpack5](https://webpack.js.org/concepts/)

## インストール方法

以降は macOS を使用したインストール方法になります。<br>

1. 右上にある緑の code と書かれている箇所にある Donwload ZIP から ZIP ファイルをダウンロードして、解凍します。
2. [Node.js](https://nodejs.org/ja/)の LTS 版をインストールします。インストーラーの指示に従って進んでいけば大丈夫です。
3. Node.js がインストールできたらターミナルで `npm install --g yarn `を実行します。yarn がインストールできます。
4. yarn がインストールできたら、ダウンロードした ZIP ファイルを VScode で開きターミナルで`yarn install`を実行します。（ビルドに必要なモジュールをインストールしてくれます）

## webpack の設定について

### 基本的な webpack 実行コマンド

一通り下記コマンドを実行してみましょう。

<table>
  <tr>
    <th>実行したい内容</th>
    <th>実行コマンド</th>
  </tr>
  <tr>
    <td>開発用にビルド＆ローカルサーバーを立てる</td>
    <td>yarn run dev</td>
  </tr>
  <tr>
    <td>商用にビルド</td>
    <td>yarn run build</td>
  </tr>
  <tr>
    <td>ローカルサーバーを立てる</td>
    <td>yarn run webpack:server</td>
  </tr>
  <tr>
    <td>開発用にビルドする</td>
    <td>yarn run webpack:dev</td>
  </tr>
  <tr>
    <td>distファイル内を削除する</td>
    <td>yarn run cleanup</td>
  </tr>
</table>

### webpack 内で使用しているツール

下記は webpack 内で使用している主なツールです。各ツールごとにさまざまな設定ができますが、ここでは割愛します。

- [Babel](https://babeljs.io/)<br>JavaScript の新しい書き方から古い書き方に変換するツールです。
- [ESLint](https://eslint.org/)<br>JavaScript のための静的検証ツールです。単純な構文エラーやプロジェクト固有のコーディング規約を定義することができます。

## License

License: [MIT License](https://opensource.org/licenses/MIT)<br>
Contributors: KenyaMasuko
