var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'style.css' }),
    ]
    
};