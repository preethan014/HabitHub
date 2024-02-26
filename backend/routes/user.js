const express=require("express");
const router=express.Router();
const {getUsers,postUser,checkUser}=require("../controllers/user")
const {handleAddTask,getTaskList}=require("../controllers/task")

router.route("/").get(getUsers);
router.route("/register").post(postUser);
router.route("/login").post(checkUser);
router.route("/addtask").post(handleAddTask);
router.route("/gettask").post(getTaskList);



module.exports=router;