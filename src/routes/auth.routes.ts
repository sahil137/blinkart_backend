import { createOrUpdateUser } from '@controllers/user-controller';
import { authMiddleWare } from '@middlewares/auth.middleware';
import express from 'express';

const router = express.Router();

router.post('/create-or-update-user', authMiddleWare, createOrUpdateUser);

export default router;
