const path = require('path');
const webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	entry: path.resolve(__dirname, 'src/main.jsx'),

	output: {
		// output path
		path: path.resolve(__dirname, 'public/dist'),
		publicPath: 'dist/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
      {
        test: /\.css$/,
        loader: 'style!css'
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
