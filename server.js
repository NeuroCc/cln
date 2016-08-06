var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var grokRequest = {};
var grokResponse = {};
env.node.grokResponses = env.node.grokResponses || [];
app.get('/',function(req,res){
	env.node.grokResponses.push(res);
res.sendfile('index.html');
});
app.get('/grok', function(req,res) {
   res.send(JSON.stringify(env.node.grokResponses));
});
app.listen(666,function(){

});

//var smtpTransport = node
