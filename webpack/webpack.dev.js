const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
    mode: "development",

    devServer: {
        historyApiFallback: true,
        open: true,
    },
    plugins: [new ReactRefreshWebpackPlugin()],
};
