var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash:10]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['file-loader']
      },
      // js
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
};
