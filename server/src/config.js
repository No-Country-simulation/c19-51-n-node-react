import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://enma:Lg5Ro5umFhtDT3xC@nocountry.q7lzmfz.mongodb.net/inventory";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
