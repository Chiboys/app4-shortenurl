"use strict";

var express = require("express");
var app = express();
var shorten = express.Router();
app.use("/shorten",shorten);
app.use("/public",express.static(process.cwd()+"/public"));
var client = require("mongodb").MongoClient;
client.connect("mongodb://localhost:27017/shorten" /*|| "mongodb://chiboy:123010@ds139645.mlab.com:39645/smallworld"*/,function(err,db){
	if(err) {throw err;}
	var route = require("./app/routes/route.js");
	route(shorten,db);
	app.listen(process.env.PORT || 3000,function(){
		console.log("listening the port");
	});

});
