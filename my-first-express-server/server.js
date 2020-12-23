const express = require("express");
const app = express();
app.get("/",function(req,res){
    res.send("<h1>Hello!</h1>");
});
app.get("/about",function(req,res){
    res.send("<h2>Hey This is Veena Chaddha, A passionate student at SRM</h2>");
});
app.get("/contact",function(req,res){
    res.send("Do contact us peeps!!");
});
app.listen(3001,function(){
        console.log("Server has started at port 3000");
        }
    );