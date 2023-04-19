import { NextFunction, Request, Response } from 'express';
import admin from '@config/firebase';
import { StatusCodes } from 'http-status-codes';

export const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.headers);
    // const { authorization } = req.headers;
    const token = req.headers['authorization'];
    console.log('token', token);
    const firebaseUser = await admin.auth().verifyIdToken(token || '');
    console.log('Firebase user', firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'Invalid or expired token',
    });
  }
};
