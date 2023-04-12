import express, { Request, Response } from 'express';

const indexRoutes = express.Router();

indexRoutes.get('/', (req: Request, res: Response) => {
  res.json({ message: 'recieved' });
});

export default indexRoutes;
