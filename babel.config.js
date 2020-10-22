module.export = {
	presets: [
		'@babel/preset-env',
		// 按需导入polyfill，减小打包的体积。同时，能够解析babel不能够直接解析的新语法API,比如：Array的from方法
		{
			useBuiltIns: 'usage',
			corejs: 3,
		},
		'@babel/preset-react',
	],
	plugins: ['@babel/plugin-transform-runtime'],
};
