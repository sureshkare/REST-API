import http, {Server, IncomingMessage, ServerResponse} from 'http';

let hostname:string = '127.0.0.1';
let port:number = 5000;

let server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {
     response.statusCode = 200;
     response.setHeader('Content-Type', 'text/html');

     //node js routing
     let url:string | undefined = request.url;
     let method:string | undefined = request.method;
     let result:string = '';

     if(url === '/' && method === 'GET'){
        result = `<h3 style="color:green">Welcome to Node js server</h3>`;
     }
     else if(url === '/about' && method === 'GET'){
        result = `<h3 style="color:green">Welcome to about page</h3>`;
     }
     else if(url === '/contacts' && method === 'GET'){
        result = `<h3 style="color:green">Welcome to contacts page</h3>`;
     }
     else{
        result = `<h3 style="color:green">Page Not Found</h3>`;
     }


     response.end(`${result}`);
});

server.listen(port, hostname, () => {
    console.log(`Node Js server is started at http://${hostname}:${port}`);
});
