const express=require('express');
const authRoutes=require('./routes/auth-routes');

const app=express();

app.set("view engine","ejs");

//set up routes
app.use(authRoutes);


app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(3001,()=>{
    console.log("app is listing on port 3001 ")
});