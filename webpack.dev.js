const path = require("path")
const webpackMerge = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';
const htmlMinifyOption = false;

module.exports = () => webpackMerge(commonConf({ outputFile, assetFile, htmlMinifyOption }), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, './src'),
            watch: {
                ignored: /node_modules/
            }
        },
        port: 8080,
        host: 'localhost',
    }
});