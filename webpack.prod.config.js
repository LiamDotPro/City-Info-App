// Look over this later: http://javascriptplayground.com/blog/2016/07/css-modules-webpack-react/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');


module.exports = {
	
  entry: [
    './src/index.js',
  ],
	
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.min.js'
  },
  devtool: 'source-map',
  module: {
    
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
  
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    }
      
    ]
  },
	
	postcss: [
		autoprefixer({ browsers: ['last 2 versions'] })
	],
	
	resolve: {
		extensions: ['', '.js', '.jsx','.css']
	},
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'City Info App',
      inject: 'body',
    }),
    new ExtractTextPlugin("style.css"),
	new webpack.ProvidePlugin({
	  "React": "react",
	})
  ]
};
