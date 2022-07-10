const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", path.resolve(__dirname, "./src/index.tsx")],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./build"),
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    host: "localhost",
    port: 4200,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};
