const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true

     },
     email:{
        type:String,
        requried:true
     },
     password:{
        type:String,
        required:true,
     },

     token:{
        type:String,
        required:true
     },

     role:{
        type:String,
        default:"user"
     },
     Cart:{
      type:mongoose.Schema.ObjectId,
      ref:'Cart'
     }
})

const User=mongoose.model('User',userSchema);
module.exports={User};