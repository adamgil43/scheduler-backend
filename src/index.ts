import express from 'express';
import cors from 'cors';
import masterRoutes from './routes/routes';
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use('/', masterRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});