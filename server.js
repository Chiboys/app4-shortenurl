"use strict";

var express = require("express");
var app = express();
var shorten = express.Router();
app.use("/public",express.static(process.cwd()+"/public"));
var client = require("mongodb").MongoClient;
client.connect(/*"mongodb://localhost:27017/shorten" */ "mongodb://218.75.242.247:27017/shorten",function(err,db){
	if(err) {throw err;}
	var route = require("./app/routes/route.js");
	route(app,db);
	app.listen(process.env.PORT || 3000,function(){
		console.log("listening the port");
	});

});
