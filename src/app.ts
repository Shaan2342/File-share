import express from 'express';
import userRoutes from './routes/userRoutes';
import fileRoutes from './routes/fileRoutes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/files', fileRoutes);

export default app;
