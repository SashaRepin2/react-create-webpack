const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [path.resolve(__dirname, "..", "./src/index.tsx")],

    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "[name].[contenthash].js",
        clean: true,
        sourceMapFilename: "[name].js.map",
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },

    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "..", "./public/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|ico|jpg|jpeg|gif)$/i,
                type: "asset/resource",
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
