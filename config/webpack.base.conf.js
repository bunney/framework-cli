const webpack = require('webpack');
const fs = require('fs');
const _ = require('lodash/core');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pagesPath = path.join(__dirname, '../src/web/views');
const widgetPath = path.join(__dirname, '../src/web/widget');
const HtmlAfterWebapckPlugin = require('./htmlAfterWebpackPlugin.js');

// 负责提取 css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//处理所有的js的入口文件
const jsEntris = {};
fs.readdirSync(pagesPath).map((o, filename) => {
	// console.log(o,'-----------');
	const _fd = pagesPath + "/" + o;
	fs.readdirSync(_fd).map((innnero, ifile) => {
		if (/.entry.js$/.test(innnero)) {
			jsEntris[innnero.replace(".entry.js", "")] = path.join(pagesPath, o, innnero);
		}
	})
});

//找到所有的widget的入口 放到Widget
//找到所有page views 放到build
/**
 * 1.入口文件指定OK
 * 2.loaders配置OK
 * 3.公用的模块
 */
const _entries = Object.assign(jsEntris);
const _modules = {
	rules: [{
		test: /\.js$/,
		loader: "babel-loader",
		options: {
			"presets": ['env']
		}
	}, {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: "css-loader!postcss-loader"
		})
	}]
}
const _resolve = {
	extensions: [".js", ".css"]
}
const _devLoaders = _.clone(_modules.rules);
const _prodLoaders = _.clone(_modules.rules);
const WebpackConfig = {
	dev: {
		entry: _entries,
		module: {
			rules: _devLoaders
		},
		resolve: _resolve
	},
	prod: {
		entry: _entries,
		module: {
			rules: _prodLoaders
		},
		resolve: _resolve
	}
};
module.exports = WebpackConfig;