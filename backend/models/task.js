const mongoose=require("mongoose")
const TaskSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId
    },
    date:String,
    taskName:String,
    taskDescription:String
},{timestamps:true})
module.exports=mongoose.model("task",TaskSchema);