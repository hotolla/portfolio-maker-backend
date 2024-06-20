import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  portfolios: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio'}
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    user.password = await bcrypt.hash(user.password, 10);

    next();
  } catch (error) {
    return next(error);
  }
});

export const User = mongoose.model('users', userSchema);