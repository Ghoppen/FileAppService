import { RequestHandler } from 'express';

const getFile: RequestHandler<{ filename: string }> = (req, res) => {
  res.send(`getting a single file by name ${req.params.filename}`);
};

export default getFile;
