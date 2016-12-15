const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = {
  
  entry: [
    './src/index.js',
  ],
  
  output : {
    path : path.join(__dirname, './build'),
    filename: 'build.min.js'
  },
  
  devtool: '#sourcemap',
  
  module : {
    loaders: [{
      exclude: /node_modules/,
      loader : 'babel',
      query  : {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
      
      {
        test  : /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    
    ]
  },
  
  postcss: [
    autoprefixer({browsers: ['last 2 versions']})
  ],
  
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title : 'City Info App',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.WEATHERAPI': JSON.stringify(process.env.WEATHERAPI || 'development')
    }),
    new ExtractTextPlugin("style.css")
  ]
};
