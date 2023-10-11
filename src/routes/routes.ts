import { Router } from 'express';
import users from './users'; // Import your userRoutes module

const router = Router();

// Mount your route modules
router.use('/users', users);

export default router;