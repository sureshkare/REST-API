import express from 'express';

const userRouter:express.Router = express.Router();

//logic
userRouter.get('/', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>Welcome to User router</h3>`);
})

//form data
userRouter.post('/login', (request:express.Request, response:express.Response) => {
       let formData = request.body;
       response.status(200).json(
        {
            message: "Formdata is recieved",
            formData: formData
        }
       );
})

export default userRouter;