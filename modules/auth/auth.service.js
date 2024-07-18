import jwt from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import { addUser, findUser } from '../users/users.service.js';
import { AppError } from '../../helpers/app-error.js';

export const register = async (user) => {
  const verifiedUser = await findUser({ 'email': user.email} );

  if (!verifiedUser) {
    return addUser(user);
  }
};

export const login = async ({ email, password }) => {
  const user = await findUser({ email });

  if (!user || !compareSync(password, user.password)) {
    throw new AppError({
      status: 401,
      message: 'Login data isn\'t valid.'
    });
  }
  
  return {
    user,
    token: jwt.sign(
      { id: user._id },
      process.env.JWT_AUTH_SECRET_KEY, 
      { expiresIn: '14d' }
    )
  };
};
