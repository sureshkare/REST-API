import http from 'http';
//or import http, {IncomingMessage, ServerResponse} from 'http';

export class ApiRouter{
    public static MapRoutes(request:http.IncomingMessage, response:http.ServerResponse ){
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
    }
}