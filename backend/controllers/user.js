const user=require('../models/user')
async function getUsers(req,res){
    try { const data=await user.find({});
    return res.send({data:data});
    } catch (error) {
        console.log("error ",error);
        return res.send({msg:"error at backend"}) ;  
    }
}
async function checkUser(req,res){
    try {
        const checkUser=await user.findOne({email:req.body.email});
        if(checkUser){
           
            if(checkUser.password===req.body.password){
                return res.send({msg:"successfull",uid:checkUser._id});
            }
            return res.send({msg:"incorrect password"});
        }
        return res.send({msg:"user not found"});
    } catch (error) {
        console.log("error",error);
    }
}
async function postUser(req,res){
    try {
        const checkUser=await user.findOne({email:req.body.email});
        if(!checkUser){
            const result=await user.create(req.body);
            result.tokenId=""
        return res.send({msg:"created"})
        }
        return res.send({msg:"user exists"}) ;
    } catch (error) {
        console.log("error",error);   
    }
}
module.exports={getUsers,postUser,checkUser}