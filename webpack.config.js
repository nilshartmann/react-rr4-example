const path = require('path');
const webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	entry: path.resolve(__dirname, 'src/app.js'),

	output: {
		// output path
		path: path.resolve(__dirname, 'public/dist'),
		publicPath: 'dist/',
		filename: 'dist.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	plugins: [
		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin()
	],

	stats: {
		colors: true
	},

	devtool: 'source-map'
};
