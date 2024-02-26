const task=require("../models/task");
const user=require('../models/user')
async function handleAddTask(req,res){
    const userid=req.body.userid;
    const data=await task.create(req.body);
    const findd=await user.findByIdAndUpdate({_id:userid},{$push:{tasks:{_id:data._id}}});
    return res.send({msg:"success"});

}
async function getTaskList(req,res){
    const dd=await task.find({ userid: req.body.userid, date: req.body.date })
    console.log(dd);
    res.send({msg:dd});


}
module.exports={handleAddTask,getTaskList}