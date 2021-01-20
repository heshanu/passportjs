const router=require("express").Router();

//auth login
router.get("/login",(req,res)=>{
    res.render("login")
})

//auth logout
router.get("logout",(req,res)=>{
    res.send("Logging out");
})

router.get("/google",(req,res)=>{
    res.send("logging in with google")
})

module.exports=router;