import { Router } from 'express';
import { router as user } from './users/router.js';

export const router = Router();

router.use(
  user
);
