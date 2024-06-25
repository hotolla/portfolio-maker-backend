import jwt from 'jsonwebtoken';
import { findUser } from '../users/users.service.js';

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_AUTH_SECRET_KEY);

    req.user = await findUser({ _id: decodedToken.id });

    next();
  } catch {
    const error = new Error();

    error.status = 401;

    return next(error);
  }
};
