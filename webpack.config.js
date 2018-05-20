const path = require('path');
const webpack = require('webpack');
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        index: [
            path.resolve(__dirname, 'src/app.js')
        ]
    },
    output: {
        filename: 'main.gs',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new GasPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};