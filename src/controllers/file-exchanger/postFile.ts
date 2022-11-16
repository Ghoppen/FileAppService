import { RequestHandler } from 'express';
import { UploadedFile, FileArray } from 'express-fileupload';
import path from 'path';
import NothingToUploadException from '../../errors/NothingToUpload';

const postFile: RequestHandler = (req, res, next) => {
  const files: FileArray | null | undefined = req.files;

  if (!files || Object.keys(files).length === 0) {
    next(new NothingToUploadException());
  } else {
    const f: UploadedFile | UploadedFile[] = files.example_txt;
    const uploadPath = path.join(__dirname, '..', '..', 'files', (f as UploadedFile).name);
    (f as UploadedFile).mv(uploadPath, (err: Error) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send('file uploaded');
    });
  }
};

export default postFile;
