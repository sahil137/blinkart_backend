import express, { Application, Request, Response } from 'express';
import dbConnection from '@config/mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import indexRoutes from '@routes/index.routes';
dotenv.config();

const app: Application = express();

dbConnection();
app.use(morgan('dev'));
app.get('/', indexRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT :: ${PORT} 🚀`);
});
