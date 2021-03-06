const mongoose =require('mongoose');
const validator= require('validator')

const userSchema = mongoose.Schema({

    name :{
        type:String,
        required: true
    },
    address :{
        type:String,
       required: true
    },
    email:{
        type: String,
        required:true,
         validator:[
             {
                 validator:value=> validator.isEmail(value),
                 message: '{value} is not a valid email id'
             }
        ]
    },
    phone :{
        type:String,
        required: true,
        validate:[{
            validator: value=> (validator.isNumeric(value)&& validator.isLength(value,{min : 10, max:10})),
            message:'{value} is not a valid phone number'
        }]
    },

    username:{
        type: String,
        required:true
    },

    gender:{
        type: String,
       required:true
    },

    isActive:{
        type:Boolean,
        default:false
    },

    password:{
        type:String,
        required:true
    }
})


userSchema.pre('save', function(next){
    const user=this;
    if(user.isModified('password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password=hash;
                next();
            })
        })
    }
    else
        next();
        
})

const user =module.exports=mongoose.model('user',userSchema);
