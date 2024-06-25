import { User } from './user.model.js';

export const addUser = (user) => {
  console.log('addUser', user)
  try {
    return User.create(user);
  } catch (error) {
    throw error;
  }
};

export const findUser = (data) => {
  return User.findOne(data);
};

export const updateUser = async (id,  data) => {
  const user = await User.findOneAndUpdate(id, data);

  return user;
};

export const showUser = async (id) => {
  return (await User.findOne(id));
};
