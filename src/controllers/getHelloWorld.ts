import { RequestHandler } from 'express';

export const getHelloWorldHandler: RequestHandler = (req, res) => {
  const name = (req.body as { name: string }).name;
  let message = 'Hello there Stranger';
  if (name) {
    message = `Well hello there, ${name}`;
  }
  res.status(200).send(message);
};
