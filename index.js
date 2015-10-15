/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', express.static('./'));

app.get('/parkergarrison', function (req, res) {
  res.end('Hello from Parker!');
});

app.listen(3000);
