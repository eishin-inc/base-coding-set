const path = require("path");
const { ProvidePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack-watched-glob-entries-pluginインストール
const WebpackWatchedGlobEntries = require("webpack-watched-glob-entries-plugin");

// jsファイルをワイルドカードでエントリポイント設定
const entries = WebpackWatchedGlobEntries.getEntries(
  [path.join(__dirname, "./src/assets/js/**/*.js")],
  {
    ignore: path.join(__dirname, "./src/assets/js/**/_*.js"),
  }
)();

// htmlを複数に出力する;
const htmlGlobPlugins = (entries, srcPath) => {
  return Object.keys(entries).map(
    (key) =>
      new HtmlWebpackPlugin({
        inject: "body",
        filename: `${key}.html`,
        template: `${srcPath}/${key}.html`,
        chunks: [key],
      })
  );
};

module.exports = ({ outputFile, assetFile, htmlMinifyOption }) => ({
  entry: entries,
  output: {
    path: path.join(__dirname, "dist"),
    filename: `./assets/js/${outputFile}.js`,
    chunkFilename: `./assets/js/${outputFile}.js`,
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // webpack5から下記の記述。file-loaderはいらない。mini-css-extract-pluginのバージョン0.x.x系とはエラーが起きる
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot|mp4|mov)$/,
        type: "asset/resource",
        generator: {
          filename:`./assets/images/${assetFile}.[ext]`
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":src"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./assets/css/style.[contenthash].css`,
    }),
    //　オプション
    // よく使用するモジュールをimportせずにグローバルにバンドルする事ができる。
    // これによってindex.js, service.jsでjqueryが使用できる。
    new ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      
    // オリジナル関数をimportしないで使用できる
      utils: [path.join(__dirname, "src/assets/js/utils/_utils.js"), "default"],
    }),

    new WebpackWatchedGlobEntries(),
    // htmlを複数のエントリポイントで出力
    ...htmlGlobPlugins(entries, "./src"),
  ],
  // オプション
  optimization: {
    splitChunks: {
      // async　にするとダイナミックインポートの単位で分割される
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: "_vendors",
          test: /node_modules/,
          priority: -10,
        },
        utils: {
          name: "_utils",
          test: /src[\\/]/,
          chunks: "initial",
        },
        default: false,
      },
    },
  },
  resolve: {
    alias: {
      "@scss": path.join(__dirname, "src/assets/styles"),
      "@imgs": path.join(__dirname, "src/assets/images"),
    },
    extensions: [".js", ".scss"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
});
