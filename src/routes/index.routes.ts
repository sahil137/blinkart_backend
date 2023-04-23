import express, { Request, Response } from 'express';
import authRoutes from './auth.routes';
import categoryRoutes from './category.routes';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/category', categoryRoutes);

export default router;
