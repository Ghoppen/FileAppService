import { Router } from 'express';
import { helloWorldHandler } from '../controllers/helloWorld';

const helloWorldRoute = Router();

helloWorldRoute.get('/hello', helloWorldHandler);

export default helloWorldRoute;
