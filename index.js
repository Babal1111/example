// const http = require('http');

// const server = http.createServer();
// // req contains every thing which we send to a server
// const port= 4000;// a server should have a unique port number to send a request

// server.listen(port);


//________________________________________________________________________

// const http = require('http');
// const server = http.createServer((req,res) => {res.end('Hello, this is your Node.js server!')});
// const port= 4000;
// server.listen(port,()=> console.log(`Server is runnig on http://localhost:${port}`));

// //------------------reading a file-----------------------

const fs= require('fs')

// header?

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url=="/"){
        fs.readFile('readingFiles/example.txt','utf8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('File content:'+data);
        })
    }
});

const port = 3000;
server.listen(port,() => console.log(`Server is running on http://localhost:${port}`));

///----------------------------------writing a file-------------------
// const http= require('http');
// const fs = require('fs');

// const server = http.createServer((req,res) => {
//     if(req.url=='/'){
//         const message = "hello world";
//         fs.writeFile("example.txt",message,'utf',(err)=>{
//             if(err){
//                 console.error(err);
//             }
//             res.writeHead(200,{'Content-type':'text/plain'});
//             res.end("File writing operation iss completed");
//         });
//     }
// });






// server.listen(4000);








