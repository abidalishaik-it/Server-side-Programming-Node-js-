const http=require('http');
const os=require('os');
const url=require('url');
const fs=require('fs');

const server=http.createServer((req,res)=>{  
    console.log(os.arch());
    console.log(os.freemem());
    console.log(os.totalmem());
    console.log(os.hostname());
    console.log(os.platform());
    console.log(os.type());
    const requrl='http://localehost:9000/user?country=India&city=Delhi';
    const urlobject=url.parse(requrl,true);
    console.log(urlobject.host);
    console.log(urlobject.pathname);
    console.log(urlobject.search);
    
    const querydata=urlobject.query;
    
    console.log(querydata.country);
    console.log(querydata.city);

    const urlobj=url.parse(req.url,true);

    const filename='.'+urlobj.pathname;
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end('404 Not Found');
        }
        else{
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
        }
    });
 
});

server.listen(9000,'127.0.0.1',()=>{
    console.log('Server is running')
});
