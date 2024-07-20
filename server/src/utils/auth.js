import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId, role) => {
    return jwt.sign({ id: userId, role: role }, TOKEN_SECRET, { expiresIn: '1h' });
};