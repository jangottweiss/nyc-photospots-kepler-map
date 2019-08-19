const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new webpack.EnvironmentPlugin(['MapboxAccessToken']),
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: false,
            // copys the content of the existing index.html to the new /build index.html
            template: path.resolve('./index.html'),
        }),
    ]
};