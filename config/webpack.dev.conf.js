const conf = require('./webpack.base.conf');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlAfterWebapckPlugin = require('./htmlAfterWebpackPlugin.js');
const pagesPath = path.join(__dirname, '../src/web/views');
const widgetPath = path.join(__dirname, '../src/web/widget');

let plugins = [
    new ExtractTextPlugin("styles/[name].css"),
    //webpack3 新特性 scope hoisting 加快速度
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 允许你创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "dev")
    }),
    new HtmlAfterWebapckPlugin({})
]
let chunks = {
    layout:['layout'],
    index:['layout','index'],
    list:['layout','list']
}
// 获取 widget文件
function getWidget(pathDir) {
    let widgets = [];
    fs.readdirSync(pathDir).filter(file => {
        return fs.lstatSync(path.join(pathDir, file)).isDirectory();
    }).map(dir => {
        let fileDir = path.join(pathDir, dir);
        fs.readdirSync(fileDir).forEach(filename => {
            if (filename.endsWith('html')) {
                let temps = path.join(fileDir, filename);
                let builds = path.join('../widget', filename)
                widgets.push({
                    builds,
                    temps,
                    fileDir
                })
            }
        })
        // console.log(widgets,'22dir')
    })
    return widgets;
}
// 获取 views 文件
function getViews(pathDir) {
    let views = [];
    fs.readdirSync(pathDir).filter(file => {
        return fs.lstatSync(path.join(pathDir, file)).isDirectory();
    }).map(file => {
        // console.log(file)
        let baseDir = path.join(pathDir, file);
        let pageDir = path.join(baseDir, './pages');
        let htmls = fs.readdirSync(pageDir).map(filename => {
            // console.log(filename)
            let builds = path.join('../views', filename)
            let rets = path.join(pageDir, filename);
            return {
                builds: builds,
                filename: rets,
                dir: file
            };
        });
        views = views.concat(htmls);
    });
    console.log(views)
    return views;
}
getViews(pagesPath).forEach(fileMap => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: fileMap.filename,
            filename: fileMap.builds,
            inject: false,
            chunks: chunks[fileMap.dir]
        })
    )
})

getWidget(widgetPath).forEach(fileMap => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: fileMap.temps,
            filename: fileMap.builds,
            inject: false,
        })
    )
});
console.log(plugins)
// console.log(plugins,path.join(__dirname))

const options = {
    output: {
        path: path.join(__dirname, '../build/assets/'),
        publicPath: '/',
        filename: 'scripts/[name].bundle.js'
    },
    plugins,
}
const _options = Object.assign(conf.dev, options);
module.exports = _options;