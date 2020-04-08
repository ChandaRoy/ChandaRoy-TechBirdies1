var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});

app.use('/', express.static(__dirname + '/dist'));



app.listen((process.env.PORT || 8080), function () {
  console.log('I\'m Listening...');
})