import { RequestHandler } from 'express';

const deleteFile: RequestHandler<{ filename: string }> = (req, res) => {
  res.send(`deleting a single file by name ${req.params.filename}`);
};

export default deleteFile;
