import express from 'express';
import helloWorldRouter from '../routes/helloWorld/helloWorld';

const app = express();

app.use(helloWorldRouter);

export default app;
