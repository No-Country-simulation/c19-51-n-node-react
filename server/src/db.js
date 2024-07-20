import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';
import logger from './utils/logger.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info(">>> DB is connected");
  } catch (error) {
    logger.error("DB connection error:", error);
  }
};
