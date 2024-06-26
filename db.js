import mongoose from 'mongoose';

export const connect = () => {
  return mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log('Connected to MongoDB!!!');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
};
