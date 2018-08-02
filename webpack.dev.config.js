// External
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const TSLintPlugin = require("tslint-webpack-plugin");

// Internal
const commonConfig = require("./webpack.base.config");
module.exports = webpackMerge(commonConfig, {
    mode: "development",
    entry: "./app.ts",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        historyApiFallback: {
            index: "src/"
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        inline: true
    },
    plugins: []
});
