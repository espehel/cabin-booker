var http = require('http');
var express = require('express');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var compiler = webpack(config);


var port = 9999;

var app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('public'));

//--------mocked api call------------------//
app.get('/api/cabins/:id', (req, res) => {
  res.sendFile(__dirname + '/mock/fetch-cabins-mocked.json');
});

// Send index.html for all other routes
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

var server = http.createServer(app);

server.listen(port, function() {
  console.log("Server started on port " + port);
});
