var http = require('http');
var fs=require('fs');

var server=http.createServer((req,res)=>{
    fs.readFile((err,data)=>{
        res.writeHead(200,{'content-type':'text/html'});
        res.write("data");
        res.end();

    })
   
});

var arr=Buffer.from("Hello");
console.log(arr.toString);

var hee=Buffer.from(JSON.stringify({name:"abid",age:25}));
console.log(hee);

fs.readFile('file.js','utf-8',(err,data)=>{
    console.log(data);
});

server.listen(8080,'127.0.0.1',()=>{
    console.log('listening on 127.0.0.1:8080');
});