import express, { Request, Response } from 'express';
import authRoutes from './auth.routes';
const router = express.Router();

router.use('/auth', authRoutes);
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'recieved' });
});

export default router;
