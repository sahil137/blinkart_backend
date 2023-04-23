import { NextFunction, Request, Response } from 'express';
import admin from '@config/firebase';
import { StatusCodes } from 'http-status-codes';
import User from '@models/user-model';
import { UserRoles } from '@custom-types/role';

export const authCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers['authorization'];
    const firebaseUser = await admin.auth().verifyIdToken(token || '');
    req.user = firebaseUser;
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'Invalid or expired token',
    });
  }
};

export const adminCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.user;
  try {
    const user = await User.findOne({ email });
    if (user?.role === UserRoles.CUSTOMER)
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: 'Admin resource. Access Denied',
      });
    else next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
