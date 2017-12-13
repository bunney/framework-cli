/**
 * @Des 开发一个插件 帮助我们把css-js插入到对应的swig模板
 */
const cheerio = require('cheerio');

function htmlAfterWebpackPlugin(options) {
    this.options = options;
}
/**
 * 1.静态资源的一个数组
 * 2.type文件的类型
 */
function assetsHelper(arrs) {
    let result = {
        jsstr: [],
        cssstr: [],
    }
    const dir = {
        js: item => `<script src="${item}"></script>`,
        css: item => `<link rel="stylesheet" href="${item}"></link>`
    }
    for (let jsdata of arrs.js) {
        (result.jsstr).push(dir.js(jsdata));
        console.log(dir,'22222')
    }
    for (let cssdata of arrs.css) {
        (result.cssstr).push(dir.css(cssdata));
    }
    // console.log(result,'result111')
    return result;
}
htmlAfterWebpackPlugin.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
            //原来的html文件
            let _html = htmlPluginData.html;
            const result = assetsHelper(htmlPluginData.assets);
            // console.log('静态资源地址',htmlPluginData.assets.publicPath);
            // console.log('静态资源',htmlPluginData.assets.chunks);
            let isBase = htmlPluginData.outputName.includes('/layout.html');
            if (!isBase) {
                _html = _html.replace("{{css}}", result.cssstr.join(""));
                _html = _html.replace("{{js}}", result.jsstr.join(""));
            }
            htmlPluginData.html = _html;
            callback(null, htmlPluginData);
        });
    });
};

module.exports = htmlAfterWebpackPlugin;