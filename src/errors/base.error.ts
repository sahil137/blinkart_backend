import StatusCodes from 'http-status-codes';

class ErrorHandler extends Error {
  public readonly statusCode: number;

  constructor(statusCode = StatusCodes.INTERNAL_SERVER_ERROR, message: string) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

export default ErrorHandler;
