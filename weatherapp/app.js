const express=require("express");
const bodyParser=require("body-parser");
const https=require('https');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

let location;
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    location=req.body.location;
    url="https://api.openweathermap.org/data/2.5/weather?q="+location+"&units=metric&appid=fa1fbe005ef6b7bf1389921b08348db8#";
    let temp,description;
    https.get(url,(response)=>{
        response.on('data',(d)=>{
            const apidata=JSON.parse(d);
            if(apidata.message=='city not found'){
                res.send("<h3>Ooops you messed up the city name or its spelling recheck it!!!</h3>");
            }
            else{
            temp=apidata.main.temp;
            description=apidata.weather[0].description;
            console.log(temp,description);
            iconId=apidata.weather[0].icon;
            image="http://openweathermap.org/img/wn/10d@2x.png";
            res.send("<h3>"+description+"</h3><div> <img src="+image+"></div><h1>The temperature of "+location+" is "+temp+" degree celcius</h2>");
            }
        })
    })
    
})


app.listen(3000,function(){
    console.log("Server runs at port 3000");
});
