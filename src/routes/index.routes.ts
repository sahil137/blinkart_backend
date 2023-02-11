import express from 'express';
import authRoutes from './auth.routes';

const indexRoutes = express.Router();

indexRoutes.use('/auth', authRoutes);

export default indexRoutes;
