import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { json } from 'body-parser';

import routes from './routes/router';
import helloWorldRoute from './routes/helloWorld';

dotenv.config();
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
