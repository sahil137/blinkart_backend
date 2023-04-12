import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from '@config/mongoose';
import indexRoutes from '@routes/index.routes';
dotenv.config();
const app: Application = express();

//* Connect to MongoDB
dbConnection();

app.use(morgan('dev'));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());

//* Initial Route for all routes
app.use('/', indexRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT :: ${PORT} 🚀`);
});
