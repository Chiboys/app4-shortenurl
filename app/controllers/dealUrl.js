"use strict";
module.exports = function(db){
	var base = 1000;
 var collect = db.collection("url");
 this.shorten = function(req,res){
	 var url = req.url.replace(/^./,"");
	// console.log(req);
   	 collect.findOne({url:url},function(err,result){
		if(err){throw err;}
		if(result){
			res.json({
						originUrl:result.original_url,
							shortUrl:result.short_url
					});
		}else{
			var original_url = req.headers.host + req.originalUrl;
			collect.insert({url:url,original_url:original_url},function(err){
				if(err){
					throw err;
				}
			});
			collect.count(function(err,count){
				if(err){throw err;}
				var shorten_url = req.headers.host + req.baseUrl+"/"+(count + base);
				collect.update({url:url},{$set:{short_url:shorten_url}});
				collect.findOne({url:url},function(err,result){
					res.json({
						originUrl:result.original_url,
							shortUrl:result.short_url
					});
				});//���˴������count֮�󣬵�һ�������ַ��û��short�����ڶ����У�
				
			});
			
		}
	 });
//	console.log(url);
 };
  this.origin = function(req,res){
	  var shorten_url = req.headers.host + req.originalUrl;
	  console.log(res);
	  collect.findOne({short_url:shorten_url},function(err,result){
			if(err){throw err;}
			res.redirect(result.url);
	  });
//	  res.end();
	};
};