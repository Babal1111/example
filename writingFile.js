// reading files ASCNCHRONOUSLY (by using call back)

// const http= require('http');
// const fs = require('fs');

// const server = http.createServer((req,res) => {
//     if(req.url=='/'){
//         const message = "hello world";
//         fs.writeFile("writingFileExapmle.txt",message,'utf8',(err)=>{
//             if(err){
//                 console.error(err);
//             }
//             res.writeHead(200,{'Content-type':'text/plain'});
//             res.end("File writing operation is completed");
//         });
//     }
// });
// server.listen(4100);


//// reading files SCNCHRONOUSLY Ie we will not use callback fn

// const http=require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     if(req.url=="/"){

//                 // SCNCHRONOUSLY read the content from a file

//         fs.readFile('readingFiles/example.txt','utf8',(err,data)=>{
//             if(err){
//                 console.error(err);
//                 return;
//             }
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('File content:'+data);
//         })
//     }
 

// });
// const port = 5100;
// server.listen(port,()=> console.log(`server is runnig on the server://localhost: ${port}`));

// appending file in asyn manner'


const http=require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=="/"){

        const message = 'hello, this is appended using callback';
        fs.appendFile('writingFileExample.txt','\n','utf8',(err,data)=>{
            if(err){
                console.error(err);
                res.writeHead(500,{'Content-type':"text/plain"});
                res.end("internal serrver error");
                return;
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('File content appended :'+message);

            }
         
        });
    }
 

});
const port = 5100;
server.listen(port,()=> console.log(`server is runnig on the server://localhost: ${port}`));
