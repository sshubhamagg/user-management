var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var cors=require("cors");
var routes= require('./routes/routes');

var app=express();

mongoose.connect('mongodb://localhost:27017/user');

mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb');
})

mongoose.connection.on('error',(err)=>{
    console.log('could not connect to mongodb');
})
var port=3000;
app.use('/',routes);
app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log("connected to port" +port)
})

module.exports=app;