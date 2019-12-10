var userService = require('../service/userService')
var _ = require('lodash')
var httpStatus = require("http-status-codes")

exports.addUser = async (req, res) => {
    try {
        var data =req.body;
       // console.log(data);
        
        if(_.isEmpty(data)){
        res.status(400).json({ success: false, data: "user data not found" })
    }
    else {
        var user = await userService.addUser(data);

        if (user.success)
            res.status(200).json({ success: true, data: "user added successfully" })
        else{
            console.log(res);
            
            res.status(400).json({ success: false, data: "user could not be added" })
        
        }
    }
}
catch (err) {

    console.log(err);
    res.status(404).json({ error: err });
}
}