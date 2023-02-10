import express, { Application, Request, Response } from 'express';
import dbConnection from '@config/mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

const app: Application = express();

dbConnection();
app.use(morgan('dev'));
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'data recieved' });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT :: ${PORT} 🚀`);
});
