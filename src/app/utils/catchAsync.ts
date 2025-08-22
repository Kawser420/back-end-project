/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const catchAsync = (
  // eslint-disable-next-line no-unused-vars
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default catchAsync;
