var http = require('http');
var express = require('express');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var compiler = webpack(config);


var port = 9999;

function noCache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

var app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('public'));

//--------mocked api call------------------//
app.get('/api/cabins/:id', (req, res) => {
  console.log("api");
  res.sendFile(__dirname + '/mock/fetch-cabins-mocked.json');
});

// Send index.html for all other routes
app.use(function(req, res) {
  console.log("index");
  res.sendFile(__dirname + '/public/index.html');
});



var server = http.createServer(app);

server.listen(port, function() {
  console.log("Server started on port " + port);
});
