import http, {Server, IncomingMessage, ServerResponse} from 'http';

let hostname:string = '127.0.0.1';
let port:number = 5000;

let server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {
     response.statusCode = 200;
     response.setHeader('Content-Type', 'application/json');
     //URL & POST

     if(request.url === "/user" && request.method === 'POST'){
       try{
        let body:any = '';
        request.on('data', (chunk) => {
             body += chunk;
        }).on('end', () => {
            let formData = JSON.parse(body);
            response.end(`<pre>${JSON.stringify(formData)}</pre>`);
        });

       } catch(error){
        console.error(error);
       }
     }
     //response.end(`<h3 style="color:green">Welcome to Node js server</h3>`);
});

server.listen(port, hostname, () => {
    console.log(`Node Js server is started at http://${hostname}:${port}`);
});
