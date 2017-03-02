var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: ['./src/a.js','./src/b.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
   /* watch: true*/
   /* module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.coffee','.js']
    }*/
};