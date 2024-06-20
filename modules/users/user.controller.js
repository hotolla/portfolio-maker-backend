import { showUser } from '../users/users.service.js';

export const fetchUser = async (req, res) => {
  try {
    const user = await showUser(req.user);
    if (!user) {
      return res.status(401).send('user didn\'t find.');
    }
    res.json(user);
  } catch (error) {
    console.error('Error comparing passwords:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

