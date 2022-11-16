interface HTTP_STATUS {
  code: number;
  message: string;
}

const FILE_NOT_FOUND: HTTP_STATUS = {
  code: 404,
  message: 'File was not found, name of file: ',
};

const INTERNAL_SERVER_ERROR: HTTP_STATUS = {
  code: 500,
  message: 'Something went wrong',
};
const NO_FILE_ATTACHED: HTTP_STATUS = {
  code: 404,
  message: 'No file was found attached',
};

export { INTERNAL_SERVER_ERROR, FILE_NOT_FOUND, NO_FILE_ATTACHED };
