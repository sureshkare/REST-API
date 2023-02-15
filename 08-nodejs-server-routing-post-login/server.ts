import http, {Server, IncomingMessage, ServerResponse} from 'http';

let hostname:string = '127.0.0.1';
let port:number = 5000;

let server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {
     response.statusCode = 200;
     response.setHeader('Content-Type', 'text/html');
     //URL & POST

     if(request.url === "/login" && request.method === 'POST'){
       try{
        let body:any = '';
        request.on('data', (chunk) => {
             body += chunk;
        }).on('end', () => {
            let formData = JSON.parse(body);
            if(formData.name === "Suresh" && formData.password === "120526"){
              response.end(`<h3>Login is successful</h3>`);
            }else{
              response.end(`<h3>Login is unsuccessful</h3>`);
            }
            
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
