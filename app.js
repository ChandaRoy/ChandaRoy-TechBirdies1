var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var urlString = 'mongodb+srv://chanda:roy@croycluster0-k3irh.gcp.mongodb.net/CROY_DB?retryWrites=true&w=majority';
var mongoose = require('mongoose');
MongoClient.connect(urlString, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("CROY_DB").collection("Users");
   // perform actions on the collection object
   client.close();
});
app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/', express.static(__dirname + '/dist'));



app.listen((process.env.PORT || 8080), function () {
  console.log('I\'m Listening...');
})