import { NextFunction, Request, Response } from 'express';

const TryCatch =
  (controller: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      return next(error);
    }
  };

export default TryCatch;
