import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User Route');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId}`);
});

export default router;