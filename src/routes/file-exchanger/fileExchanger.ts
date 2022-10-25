import { Router } from 'express';
import deleteFile from '../../controllers/file-exchanger/deleteFile';
import getFile from '../../controllers/file-exchanger/getFile';

import getFiles from '../../controllers/file-exchanger/getFiles';
import postFile from '../../controllers/file-exchanger/postFile';

const fileExchangerRouter = Router();

fileExchangerRouter.get('/', getFiles);

fileExchangerRouter.post('/', postFile);

fileExchangerRouter.get('/:filename', getFile);

fileExchangerRouter.delete('/:filename', deleteFile);

export default fileExchangerRouter;
