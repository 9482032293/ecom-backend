const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String
    },
    stock:{
        type:Number
    },
    image:{
        type:String
    },
    descripition:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
})

const Product=mongoose.model('Product',ProductSchema);
module.exports={Product};