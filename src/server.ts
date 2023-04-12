import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT :: ${PORT} 🚀`);
});
