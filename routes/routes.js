var express=require('express');
var routes=express.Router();

var user= require('../controller/user')

var app=express();

routes.route('/addUser').post(user.addUser);

module.exports=routes;


