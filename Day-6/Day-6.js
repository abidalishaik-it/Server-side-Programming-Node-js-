var express=require('express');
var cors=require('cors');
var app=express();
app.use(cors());

var products=[
    {Id:1, Name:"Samsung Tv", Price:50000, Category:"Electronics" },
    {Id:2, Name:"Watch", Price:15000, Category:"Electronics" },
    {Id:3, Name:"Running shoes", Price:2000, Category:"Footware" },
    {Id:4, Name:"Suit", Price:3000, Category:"Fashion" }
];

app.get("/products",(req,res)=>{
    res.send(products);
});

app.get("/products/:id",(req,res)=>{
    var product=products.find(product=>product.Id==req.params.id);
    res.send(product);
});

app.get("/products/category/:catName",(req,res)=>{
    var result=products.filter(product=>product.Category==req.params.catName);
    res.send(result);
});

app.listen(8080,'127.0.0.1',()=>{
    console.log("Server Started:http://127.0.0.1:8080");

});