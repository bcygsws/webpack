const path = require('path');
//  4.x版本webpack实例 CleanWebpackPlugin首字母C必须大写，否则报错：不是一个构造函数
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: 'production',
	entry: {
		english: './src/english.js',
		chinese: './src/chinese.js',
		math: './src/math.js',
	},
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [new CleanWebpackPlugin()],
	optimization: {
		// 默认为true,表示将压缩代码，此处设置为false,是为了看到打包后代码的效果
		minimize: false,
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			automaticNameDelimiter: '~',
			// 通过实验发现maxInitialRequests表示一个模块，最多能拆分成几个模块，但这个数值不包括异步模块
			// maxInitialRequests: 2,
			//  目前没有太大效果 https://www.codercto.com/a/24308.html
			// maxAsyncRequests: 1,
		},
		// 把一些相关的运行文件分离出来，方便浏览器缓存，提升加载速度
		// runtimeChunk:{
		//   //  按照输出文件的filename，生成的文件为manifest-bundle.js
		//   name:'manifest'
		// }
	},
};
