var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
app.get('/',function(req,res){
res.sendfile('index.html');
});
app.listen(666,function(){

});

//var smtpTransport = node
