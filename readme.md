# EISHIN's Coding Set
本リポジトリを使用することでよりスムーズにコーディングができます。

## 使用するツールについて
- [Node.js](https://nodejs.org/ja/)
- [npm](https://docs.npmjs.com/about-npm)
- [yarn](https://classic.yarnpkg.com/lang/en)
- [webpack5](https://webpack.js.org/concepts/)

## インストール方法
以降はmacOSを使用したインストール方法になります。<br>
1. [Node.js](https://nodejs.org/ja/)のLTS版をインストールします。インストーラーの指示に従って進んでいけば大丈夫です。
2. Node.jsがインストールできたらターミナルで `npm install --g yarn
`を実行します。yarnがインストールできます。
3. yarnがインストールできたら、自身のPC上にプロジェクト用のフォルダを作成し、そこへ本リポジトリを `git clone` でローカル環境に複製します。（リポジトリのクローンについては[こちら](https://docs.github.com/ja/repositories/creating-and-managing-repositories/cloning-a-repository)）

## webpackの設定について
### 基本的なwebpack実行コマンド
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

### webpack内で使用しているツール
下記はwebpack内で使用している主なツールです。各ツールごとにさまざまな設定ができますが、ここでは割愛します。
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)


## License
License: [MIT License](https://opensource.org/licenses/MIT)
Contributors: KenyaMasuko# codingset
