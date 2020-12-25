const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post("/",function(req,res){
    const x=Number(req.body.num1);
    const y=Number(req.body.num2);
    const result=x+y;
    res.send("The sum is "+result);
});

app.listen(3000,()=>{
    console.log("Server starts at port 3000");
});
