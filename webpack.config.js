var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
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
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  }
}
