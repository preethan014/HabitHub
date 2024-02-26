const userHandler=require("./routes/user")
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/habithub").then(()=>{
    console.log("mongodb successfully connected");
}).catch((err)=>{
    console.log("Error at backend",err);
})
const port=4545;

app.use('/api',userHandler)

app.listen(port,(err)=>{
    console.log(`running on port ${port}`);
})