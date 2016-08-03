"use strict";

module.exports = function(rount,db){
	var dealUrl = require(process.cwd()+"/app/controllers/dealUrl.js");
	var deal = new dealUrl(db);
	rount.get("/",function(req,res){
		res.sendFile(process.cwd()+"/public/index.html");
	});
	rount.get(/\/https?:/,deal.shorten)
	rount.get(/\/\d+/,deal.origin);
}