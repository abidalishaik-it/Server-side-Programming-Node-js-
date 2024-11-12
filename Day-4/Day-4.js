const path=require('path');
const cluster=require('cluster');
const http=require('http');

console.log(path.dirname('D:/Node js/Day-4/Day-4.js'));
console.log(path.extname('D:/Node js/Day-4/Day-4.js'));
console.log(path.basename('D:/Node js/Day-4/Day-4.js'));
const mypath=path.parse('D:/Node js/Day-4/Day-4.js');
console.log(mypath.name);
console.log(mypath.root);

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`Worker ${process.pid} started`);
    const server=http.createServer((req,res)=>{
        if(req.url=='/'){
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('Home Page');
        }
        else if(req.url=='/slow-page'){
            for(let i=0;i<=600000000;i++){}
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('slow page');
            
        }
        
    });
    server.listen(9000,'127.0.0.1',()=>{
        console.log("Server Started on 9000")
    })
}