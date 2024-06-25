import * as authService from './auth.service.js';

export const register = async (req, res) => {
  console.log(req.body)
  const user = await authService.register(req.body);

  res.json({ user });
};

export const login = async (req, res, next) => {
  try {
    const loginData = await authService.login(req.body);

    res.json(loginData);
  } catch (error) {
    next(error);
  }
};

