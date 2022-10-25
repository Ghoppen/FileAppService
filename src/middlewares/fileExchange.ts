import express from 'express';
import fileExchangerRouter from '../routes/file-exchanger/fileExchanger';

const fileExchanger = express();

fileExchanger.use('/files', fileExchangerRouter);

export default fileExchanger;
