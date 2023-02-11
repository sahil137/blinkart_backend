import { signInController, signUpController } from 'controllers';
import express, { Request, Response } from 'express';

const authRoutes = express.Router();

authRoutes.post('/sign-up', signUpController);
authRoutes.post('/sign-in', signInController);

export default authRoutes;
