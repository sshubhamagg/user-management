var user= require('../models/user')
var bcrypt=require('bcrypt')
addUser= async (data)=>{
 
var password=data.password

bcrypt.hash(password, 10, function(err, hash) {
    var newUser= new user({
        name:data.name,
        username:data.name,
        email:data.email,
        gender:data.gender,
        address:data.address,
        phone:data.phone,
        password:hash
    });
    
    return new Promise((resolve,reject)=>{
        newUser.save((err,response)=>{
           if(err)
           {
               reject(console.error());
               console.log(err);
           }
               else{
                 resolve({success: true, data:response})
                 console.log(response);
               }
           });
   }).catch((error)=>{
       console.log('erroroipip');
       return({success:false, error:error})
   })
  });



};

exports.addUser=addUser