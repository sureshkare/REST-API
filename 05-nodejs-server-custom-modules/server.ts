import http, {Server, IncomingMessage, ServerResponse} from 'http';
import { StringUtil } from './util/StringUtil';

let hostname:string = '127.0.0.1';
let port:number = 5000;

let server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {
     response.statusCode = 200;
     response.setHeader('Content-Type', 'text/html');

     //String Util
     let customerName:string = 'Suresh';
     let length:number = StringUtil.printLength(customerName);

     let channelName:string = 'uiBrain Technologies';
     let result:string = StringUtil.printTriangle(channelName);
    
      
     response.end(`<pre>${result}</pre>`);
});

server.listen(port, hostname, () => {
    console.log(`Node Js server is started at http://${hostname}:${port}`);
});
