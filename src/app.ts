import express, { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { json } from 'body-parser';

import routes from './routes/router';
import helloWorldRoute from './routes/helloWorld';

const app = express();

//middlewares
app.use(json());

app.use('/:filename', routes);

app.use('/', helloWorldRoute);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({
    message: 'some error happenend',
  });
});

app.listen(process.env.PORT);
