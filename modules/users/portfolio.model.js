import mongoose from 'mongoose';

const workExperienceSchema = new mongoose.Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  company: { type: String, required: true },
  position: { type: String, required: true },
  description: { type: String }
});

const educationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  degree: { type: String, required: true }
});

const projectSchema = new mongoose.Schema({
  images: [{ type: String }],
  name: { type: String, required: true },
  description: { type: String }
});

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true }
});

const portfolioSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  workExperience: [workExperienceSchema],
  education: [educationSchema],
  email: { type: String, required: true },
  contactInfo: { type: String, required: true },
  skills: [{ type: String }],
  avatar: { type: String },
  projects: [projectSchema],
  languages: [languageSchema]
});

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);
