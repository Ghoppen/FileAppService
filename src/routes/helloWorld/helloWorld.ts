import { Router } from 'express';
import { getHelloWorldHandler } from '../../controllers/getHelloWorld';

const helloWorldRouter = Router();

helloWorldRouter.get('/hello', getHelloWorldHandler);

export default helloWorldRouter;
