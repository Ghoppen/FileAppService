/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import BaseError from '../errors/BaseError';
import { INTERNAL_SERVER_ERROR } from '../errors/HTTPStatusCodes';

function errorMiddleware(error: BaseError, request: Request, response: Response, next: NextFunction) {
  const status = error.status || INTERNAL_SERVER_ERROR.code;
  const message = error.message || INTERNAL_SERVER_ERROR.message;
  response.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;
