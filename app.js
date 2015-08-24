var express = require('express');
var path = require('path');
var app = express();
var port = 1337;
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/mongotest';
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/', function(req, res){
  MongoClient.connect(url, function(err, db){
    console.log(err);
    console.log('connected to mongo database')
    res.send("mongo database connection succesful.");
  });
});

app.listen(port || 1337, function(){
  console.log('server listening on port: ' + port)
});
