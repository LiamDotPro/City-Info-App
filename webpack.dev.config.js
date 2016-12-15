const config = require('./src/config/config.js');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
	entry: [
		'./src/index.js',
	    './src/style/style.css',
		'./src/style/title.css'
	],
	
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	
	devtool: 'source-map',
	
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1']
				}
			},
			
			{
				test: /\.css$/,
				loaders: ['style', 'css?sourceMap']
			}],
	},
	
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	},
	
	postcss: [
	  autoprefixer({ browsers: ['last 2 versions'] })
	],
	
	resolve: {
		extensions: ['', '.js', '.jsx','.css']
	},
	
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	
	plugins: [
	new HtmlWebpackPlugin({
			title: 'City Info App',
			inject: 'body',
		}),
  new webpack.DefinePlugin({
    'process.env.WEATHERAPI': JSON.stringify(config.API_KEY)
  }),
	new webpack.ProvidePlugin({
		"React": "react",
	}),
	]
};
