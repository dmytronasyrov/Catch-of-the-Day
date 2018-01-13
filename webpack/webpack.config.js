const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images/',
          name: '[name].[ext]?[hash:10]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.join(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts/',
          name: '[name].[ext]?[hash:10]'
        }
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, '../src'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};
