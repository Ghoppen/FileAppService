import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { json } from 'body-parser';
import fileUpload from 'express-fileupload';
import path from 'path';

import helloWorld from './middlewares/helloWorld';
import fileExchanger from './middlewares/fileExchange';
import errorMiddleware from './middlewares/error';

dotenv.config();
const app = express();

//middlewares
app.use(express.static(path.join(__dirname, 'files')));
app.use(json());
app.use(fileUpload());
app.use(helloWorld);
app.use(fileExchanger);
app.use(errorMiddleware);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({
    message: 'some error happenend',
  });
});

app.listen(process.env.PORT);
