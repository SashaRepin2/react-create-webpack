const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: [path.resolve(__dirname, "..", "./src/index.tsx")],

    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "..", "./build"),
        filename: "[name].[contenthash].js",
        clean: true,
        sourceMapFilename: "[name].[contenthash].js.map",
    },

    resolve: {
        alias: {
            components: path.resolve(__dirname, "..", "src/components"),
        },
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
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "..", "./public/favicon.ico"),
                    to: path.resolve(__dirname, "..", "./public"),
                },
            ],
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
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|ico|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack", "url-loader"],
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
