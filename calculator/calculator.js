const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post("/",function(req,res){
    let x=Number(req.body.num1);
    let y=Number(req.body.num2);
    let result=x+y;
    res.send("The sum is "+result);
});
app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});
app.post('/bmicalculator',function(req,res){
    let height=Number(req.body.ht);
    let weight=Number(req.body.wt);
    let bmi=weight/(height*height);
    bmi=Math.round(bmi*10000);
    let bmiCategory;
    if(bmi<18.5)bmiCategory="Underweight";
    else if(bmi>=18.5 && bmi<25)bmiCategory="Normal weight";
    else if(bmi>=25 && bmi<30)bmiCategory="Overweight";
    else bmiCategory="Obese";
    res.send("<h3>Your Body Mass Index is<h3>"+bmi +"<p>You are</p>"+bmiCategory); 
})
app.listen(3000,()=>{
    console.log("Server starts at port 3000");
});
