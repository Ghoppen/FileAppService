import { RequestHandler } from 'express';

const getFiles: RequestHandler = (_, res) => {
  res.send('Getting a list of filenames');
};

export default getFiles;
