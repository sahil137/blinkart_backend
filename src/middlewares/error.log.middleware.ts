import { Request, Response, NextFunction } from 'express';

const errorLogging = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('ERROR');
  console.log(
    `Type: ${
      error.constructor.name === 'NodeError'
        ? 'UnhandledError'
        : error.constructor.name
    }`
  );
  console.log('Path: ' + req.path);
  console.log(`Status code: ${error.statusCode || 500}`);
  console.log(error.stack);
  next();
};
export default errorLogging;
