//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://<dbuser>:<dbpassword>@ds054298.mongolab.com:54298/3028';
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


