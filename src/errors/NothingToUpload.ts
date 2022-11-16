import BaseError from './BaseError';
import { NO_FILE_ATTACHED } from './HTTPStatusCodes';

class NothingToUploadException extends BaseError {
  constructor() {
    super(NO_FILE_ATTACHED.code, `${NO_FILE_ATTACHED.message}`);
  }
}

export default NothingToUploadException;
