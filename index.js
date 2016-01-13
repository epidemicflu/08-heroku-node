var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var cfg = {
  port: process.env.PORT || 8080,
  hostname: process.env.IP || '0.0.0.0'
};

app.set('view engine', 'ejs');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

// CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var server = app.listen(cfg.port, cfg.hostname, function () {
  console.log('listening on ' + cfg.hostname + ':' + cfg.port);
});

app.get('/', function (req, res) {
  res.render('index');
});
