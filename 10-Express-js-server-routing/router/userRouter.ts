import express from 'express';

const userRouter:express.Router = express.Router();

//logic 
userRouter.get('/', (request:express.Request, response:express.Response) => {
     response.status(200).send(`<h3>Welcome to user router</h3>`);
});

userRouter.get('/test', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>Welcome to user router test path</h3>`);
});


export default userRouter;