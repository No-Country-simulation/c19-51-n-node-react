import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        const verified = jwt.verify(token, TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};
