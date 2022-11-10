const express=require ('express')
const app=express()
const port=process.env.PORT || 3000;
const hbs=require('hbs');
// const { join } = require('path');
const path=require("path")

const PublicPath=path.join(__dirname,"/public")

app.use(express.static(PublicPath))
// console.log(PublicPath);

const tempPath=path.join(__dirname,"/template/views");
console.log(tempPath)

app.set("view engine","hbs")
app.set("views",tempPath)
partialPath=path.join(__dirname,"/template/partial")
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("index",{
        home:"active",
    })

})


app.get("/about",(req,res)=>{
res.send("");
})

app.get("/weather",(req,res)=>{
    res.render("weather",{
        
    });
})

app.get("*",(req,res)=>{
    res.render("404");
})


app.listen(port,(err)=>{
    console.log("connected");
})