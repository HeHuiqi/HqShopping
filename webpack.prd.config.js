
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = merge(webpackBaseConfig,{

    output:{
        publicPath:'./dist/',
        filename:'[name].[hash:7].js',
    },
    plugins:[
        //定义当前的node环境为生产环境
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),

        new ExtractTextPlugin({
            // 提取 css，并重命名为带有 20 位 hash 值的唯一文件
            filename: '[name].[hash].css',
            allChunks: true
        }),
        //压缩js
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
        }),
        //提取模版，并保存入口html文件
        //index_prd.html会根据index.ejs模版自动生成
        new HtmlwebpackPlugin({
            filename:'../index_prd.html',
            template:'./index.ejs',
            inject:false,
        }),
    ],
});