var userService = require('../service/userService')
var _ = require('lodash')
var httpStatus = require("http-status-codes")

// exports.addUser = async (req, res) => {
//     var data =req.body;
//     try {
//        // console.log(data);
        
//         if(_.isEmpty(data)){
//         res.status(400).json({ success: false, data: "user data not found" })
//     }
//     else {
//         const user = await userService.addUser(data);
//         console.log("User data===>>",user.data);
//         if (user.success){
//             console.log("user data===",user);
            
//             res.status(200).json({ success: true, data: "user added successfully" })
//         }else{
//             console.log(res);
            
//             res.status(400).json({ success: false, data: "user could not be added" })
        
//         }
//     }
// }
// catch (err) {
//     // console.log("final error---", error);
//     res.status(404).json({ success: false, error: "user.err"});
// }
// }


exports.addUser = async (req, res) => {
    const data = req.body;
    try {
      if (_.isEmpty(data))
        throw new IssuerNotFound('user Not Found')
      else {
        const receipt = await userService.adduser(data);
        if (receipt.success)
          res.status(httpStatus.OK).json({ success: true, data: 'Issuer added successfully' });
        else
          throw new IssuerNotAdded('Issuer not added')
      }
    } catch (error) {
      console.log(error);
      res.status(httpStatus.BAD_REQUEST).json({
        errorCode: error.ErrorCode,
        errorMessage: error.message
      });
    }
  }