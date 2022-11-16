import BaseError from './BaseError';
import { FILE_NOT_FOUND } from './HTTPStatusCodes';

class FileNotFoundException extends BaseError {
  constructor(filename: string) {
    super(FILE_NOT_FOUND.code, `${FILE_NOT_FOUND.message} ${filename}`);
  }
}

export default FileNotFoundException;
