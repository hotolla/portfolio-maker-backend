import express from 'express';
import { fetchUser } from './user.controller.js';

export const router = express.Router();

router.get('/user', fetchUser);