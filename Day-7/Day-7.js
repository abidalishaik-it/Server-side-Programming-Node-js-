const express=require('express');
const app=express();
const products_routes=require('./routes/products');

app.get('/',(req,res)=>{
       res.send("Hello I am live.");
});

//middleware or set routers

app.use('/api/products',products_routes);

const start= async()=>{
    try{
        app.listen(8080,()=>{
            console.log('Server is connected on port number:8080');
        });
    }catch(err){
        console.log(err);
    }

};

app.listen('8080','127.0.0.1',()=>{
    console.log('Server Started:http://127.0.0.1:8080');
});