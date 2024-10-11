const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const JavaScriptObfuscator = require("javascript-obfuscator");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index/index.js", // メインエントリーポイント
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // ビルド前にdistディレクトリをクリーン
    publicPath: "", // 必要に応じて設定
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // 必要に応じてBabelを使用
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/, // 画像ファイルの処理
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // dist/images に出力
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // HTML ファイルを処理するプラグイン
    new HtmlWebpackPlugin({
      template: "./src/index/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/form.html",
      filename: "form.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ASOBI_TICKET.html",
      filename: "ASOBI_TICKET.html",
      chunks: ["main"],
    }),
    // JavaScript を難読化するプラグイン
    new JavaScriptObfuscator(
      {
        rotateStringArray: true,
        stringArray: true,
        stringArrayEncoding: ["base64"],
        stringArrayThreshold: 1,
        // その他の難読化オプションをここに追加
      },
      ["bundle.js"]
    ), // 対象ファイルを指定
  ],
};
