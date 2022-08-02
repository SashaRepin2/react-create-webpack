const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
    mode: "development",

    devServer: {
        historyApiFallback: true,
        hot: "only",
        open: true,
    },
    plugins: [new ReactRefreshWebpackPlugin()],
};
