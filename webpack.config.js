const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: ["./src/index/index.js", "./src/index/index.css"],
    form: ["./src/form/form.js", "./src/form/form.css"],
    ASOBI_TICKET: [
      "./src/ASOBI_TICKET/inject.js",
      "./src/ASOBI_TICKET/otBannerSdk.js",
      "./src/ASOBI_TICKET/otSDKStub.js",
      "./src/ASOBI_TICKET/polyfills-ROJ3GJHA.js",
      "./src/ASOBI_TICKET/script.js",
      "./src/ASOBI_TICKET/uwt.js",
      "./src/ASOBI_TICKET/styles.css",
      "./src/ASOBI_TICKET/styles-EHIDZJXE.css",
    ],
  },
  output: {
    filename: "scripts/[name]_[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name]_[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "form.html",
      template: "./src/form.html",
      chunks: ["form"],
    }),
    new HtmlWebpackPlugin({
      filename: "ASOBI_TICKET.html",
      template: "./src/ASOBI_TICKET.html",
      chunks: ["ASOBI_TICKET"],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  mode: "production",
};
