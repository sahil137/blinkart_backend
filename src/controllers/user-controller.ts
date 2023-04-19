import { Request, Response } from 'express';

export const createOrUpdateUser = (req: Request, res: Response) => {
  console.log(req.user);
  res.json({ user: req.user });
};
