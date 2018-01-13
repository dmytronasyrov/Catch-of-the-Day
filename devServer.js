const path = require('path');
const express = require('express');
const webpack = require('webpack');
const app = express();

const config = require('./webpack/webpack.config.dev');
const compiler = webpack(config);

const PORT = process.env.PORT || 7770;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, 'localhost', function(err) {
  console.log(err ? err : 'Listening at http://localhost:' + PORT);
});
