const mongoose =require("mongoose");
const userShecma=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    isAdmin:{
        type:Boolean,
        default:false 
        
    }

},
{
    timestamps:true,
}
)
const userModel = mongoose.model('users',userShecma)
module.exports =userModel