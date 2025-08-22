import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome To The API back-end-project',
  });
};

// Controllers
app.get('/', getAController);

// Global Error Handler
app.use(globalErrorHandler);

// Not Found Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
    error: {
      code: 404,
      description: 'Route not found!',
    },
  });
});

export default app;
