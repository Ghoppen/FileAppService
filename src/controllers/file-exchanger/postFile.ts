import { RequestHandler } from 'express';

const postFile: RequestHandler = (_, res) => {
  res.send('saving a file');
};

export default postFile;
