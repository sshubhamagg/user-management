var user= require('../models/user')
// var bcrypt=require('bcrypt')

// const addUser= async (data)=>{
 
// var password=data.password

// bcrypt.hash(password, 10, function(err, hash) {
//     var newUser= new user({
//         name:data.name,
//         username:data.name,
//         email:data.email,
//         gender:data.gender,
//         address:data.address,
//         phone:data.phone,
//         password:hash
//     });
    
//     return new Promise(async (reject, resolve)=>{  
//         newUser.save(async (res, error)=>{
//            if(error)
//            {
//                console.log(error);
//                reject(error);
//            }
//                else{
//                    console.log('inside success');  
//                    res=res.toJSON();                 
//                  resolve({success: true, data: res});
//                 //  console.log(res);
//                }
//            });
//    }).catch((error)=>{
//        console.log("error----------", error);
//        return({success:false, error: error});
//    })
//   });


// };



const addUser = async (data) => {
   
        var newUser= new user({
                    name:data.name,
                    username:data.name,
                    email:data.email,
                    gender:data.gender,
                    address:data.address,
                    phone:data.phone,
                    password:data.password
                });

    return new Promise((resolve, reject) => {
        newUser.save((error, res) => {
            if (error) {
                console.log(error)
                reject(error);
            }
            else {
              //  console.log(res);
                resolve({ success: true, data: res });
            }
        });
    }).catch((error) => {
        console.log(error);
        return { success: false, error: error };
    });
};

exports.addUser=addUser;