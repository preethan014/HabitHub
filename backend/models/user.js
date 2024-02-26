const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    userName:{
        type:String,
        unique:true
    },
    tokenId:{
        type:String,
        unique:true
    },
    tasks:[
       { type:mongoose.Schema.Types.ObjectId,ref:"task"}
    ]
},{timestamps:true})
module.exports=mongoose.model("user",UserSchema);