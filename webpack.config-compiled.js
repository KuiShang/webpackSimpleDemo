'use strict';

var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: ['./src/a.js', './src/b.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true

};

//# sourceMappingURL=webpack.config-compiled.js.map