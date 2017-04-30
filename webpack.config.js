var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './lib');
var APP_DIR = path.resolve(__dirname, './client');

var config = {
    entry: [APP_DIR + '/index.js'],
    output: {
        path: APP_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /(\.jsx)|(\.js)/,
            include: [APP_DIR, BUILD_DIR],
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.css?/,
            loader: 'style-loader!css-loader'      
        } 
        ]
    }
};

module.exports = config;
