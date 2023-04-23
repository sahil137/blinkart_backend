import ErrorHandler from '@errors/base.error';
import User from '@models/user-model';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const createOrUpdateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { picture, name, email } = req.user;
  const user = await User.findOneAndUpdate({ email }, { name }, { new: true });

  if (!!user) {
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name,
    }).save();
    res.json(newUser);
  }
};

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.user;
  const user = await User.findOne({ email });
  if (!user)
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, 'User not found'));
  res.json(user);
};
