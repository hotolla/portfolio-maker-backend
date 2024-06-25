import { Router } from 'express';
import { router as auth } from './auth/router.js';
import { router as user } from './users/router.js';
import { authMiddleware } from './auth/auth.middleware.js';

export const router = Router();

router.use(
  auth,
  authMiddleware,
  user
);
