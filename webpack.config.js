const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackObfuscator = require("webpack-obfuscator");

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
    clean: true,
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
        use: [
          {
            loader: WebpackObfuscator.loader,
            options: {
              compact: true,
              controlFlowFlattening: true,
              controlFlowFlatteningThreshold: 1,
              deadCodeInjection: false,
              deadCodeInjectionThreshold: 0.4,
              debugProtection: false,
              debugProtectionInterval: 0,
              disableConsoleOutput: true,
              domainLock: [],
              domainLockRedirectUrl: "about:blank",
              forceTransformStrings: [],
              identifierNamesCache: null,
              identifierNamesGenerator: "hexadecimal",
              identifiersDictionary: [],
              identifiersPrefix: "",
              ignoreImports: false,
              inputFileName: "",
              log: false,
              numbersToExpressions: false,
              optionsPreset: "default",
              renameGlobals: false,
              renameProperties: false,
              renamePropertiesMode: "safe",
              reservedNames: [],
              reservedStrings: [],
              seed: 0,
              selfDefending: true,
              simplify: true,
              sourceMap: false,
              sourceMapBaseUrl: "",
              sourceMapFileName: "",
              sourceMapMode: "separate",
              sourceMapSourcesMode: "sources-content",
              splitStrings: false,
              splitStringsChunkLength: 10,
              stringArray: true,
              stringArrayCallsTransform: true,
              stringArrayCallsTransformThreshold: 1,
              stringArrayEncoding: ["rc4"],
              stringArrayIndexesType: ["hexadecimal-number"],
              stringArrayIndexShift: true,
              stringArrayRotate: true,
              stringArrayShuffle: true,
              stringArrayWrappersCount: 1,
              stringArrayWrappersChainedCalls: true,
              stringArrayWrappersParametersMaxCount: 2,
              stringArrayWrappersType: "function",
              stringArrayThreshold: 1,
              target: "browser",
              transformObjectKeys: true,
              unicodeEscapeSequence: true,
            },
          },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "cssnano",
                    {
                      preset: [
                        "default",
                        {
                          discardComments: { removeAll: true },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          },
        ],
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
    minimize: true,
    minimizer: [`...`],
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
  // devtool: "source-map",
};
