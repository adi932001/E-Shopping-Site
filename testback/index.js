const express =require("express");
const app=express();
const port=3000
const admin=(req,res)=>{
    return res.send("this is dash");
    
};
const loggedin=(req,res,next)=>{
    console.log("Aditya");
    next();
    
};
const isadmin=
    (req,res,next)=>{console.log("this is home adi");
    next();
    
};


app.get('/admin',loggedin,isadmin,admin);
app.get('/signout',(req,res)=>{
    return res.send("you are signout"); 
});
app.listen(port,()=>console.log('server is running'));
