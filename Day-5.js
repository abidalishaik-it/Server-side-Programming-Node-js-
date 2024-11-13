const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send(
        `<h2>Home Application</h2>
        <a href='/mobiles'>Mobiles</a>
        <a href='/watches'>Watches</a>
        `);
});

app.get("/mobiles",(req,res)=>{
    res.send("Your Requested Mobiles Page is here..<br> <a href='/'>Home</a>");
});
app.get("/watches",(req,res)=>{
    res.send("Your Requested Watches Page is here..<br> <a href='/'>Home</a>");
});
app.get("*",(req,res)=>{
    res.send("Not Found-Your Requested Page is not found");
});

app.listen(8000,'127.0.0.1',()=>{
    console.log(`Server Started : http://127.0.0.1:8000`);
});