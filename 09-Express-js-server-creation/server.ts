import express from 'express';

const app:express.Application = express();

const hostname:string = '127.0.0.1';
const port:number = 5000;

app.get('/', (request:express.Request, response:express.Response) => {
      response.status(200).send(`<h3>Welcome to Express JS</h3>`);
});

app.listen(port, hostname, () => {
    console.log(`Express server is started at http://${hostname}:${port}`);
})