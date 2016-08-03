"use strict";

module.exports = function(rount,db){
	var dealUrl = require(process.cwd()+"/app/controllers/dealUrl.js");
	var deal = new dealUrl(db);
	app.get("/",function(req,res){
		res.sendFile(process.cwd()+"/public/index.html");
	});
	app.get(/\/https?:/,deal.shorten)
	app.get(/\/\d+/,deal.origin);
}