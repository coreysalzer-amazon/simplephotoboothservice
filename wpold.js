var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: [
		"./src/index"
	],
	module: {
		loaders: [{
			test: /\.js?$/,
			loader: "babel",
			query: {
				presets: [
					"es2015",
					"react",
					"stage-2"
				]
			},
			exclude: /client\/node_modules/
		},{ 
			test: /\.(css|scss|sass)$/,
			loader: "style!css!sass"
		}]
	},
	resolve: {
		extensions: ["", ".js"]
	},
	output: {
		path: path.join(__dirname, "/public"),
		publicPath: "./public",
		filename: "spbs-core.js",
	},
	devServer: {
		contentBase: "./public",
		hot: true
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		})
	]
};
