import User from '../models/user.model.js';
import { hashPassword, comparePassword, generateToken } from '../utils/auth.js';
import logger from '../utils/logger.js';

// Registrar un nuevo usuario (por el propio usuario)
export const register = async (req, res) => {
    try {
        let { firstName, lastName, email, password, address, phone, identification, role, photo } = req.body;

        // Convertir email a minúsculas
        email = email.toLowerCase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            address,
            phone,
            identification,
            role,
            photo
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        logger.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user", error });
    }
};

// Iniciar sesión
export const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        // Convertir email a minúsculas
        email = email.toLowerCase();

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = generateToken(user._id);

        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
            .json({
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role
                }
            });
    } catch (error) {
        logger.error("Error during login:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// Cerrar sesión
export const logout = (req, res) => {
    try {
        res.clearCookie('token').json({ message: "Logged out successfully" });
    } catch (error) {
        logger.error("Error during logout:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
