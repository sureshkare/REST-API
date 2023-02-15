import express from 'express';
import appLogger from '../middlewares/appLogger';

const apiRouter:express.Router = express.Router();

//logic 
apiRouter.get('/', (request:express.Request, response:express.Response) => {
     response.status(200).send(`<h3>Welcome to API router</h3>`);
});

apiRouter.get('/test', appLogger, (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>Welcome to API router test path</h3>`);
});


export default apiRouter;