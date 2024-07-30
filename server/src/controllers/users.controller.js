import User from '../models/user.model.js';
import { hashPassword } from '../utils/auth.js';
import logger from '../utils/logger.js';

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        logger.error("Error retrieving users:", error);
        res.status(500).json({ message: "Error retrieving users", error });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        logger.error("Error retrieving user:", error);
        res.status(500).json({ message: "Error retrieving user", error });
    }
};

// Crear un nuevo usuario (por un administrador)
export const createUser = async (req, res) => {
    try {
        let { identification, firstName, lastName, email, password, address, phone, role, photo } = req.body;

        // Convertir email a minúsculas
        email = email.toLowerCase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new User({
            identification,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            address,
            phone,
            role,
            photo
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        logger.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user", error });
    }
};

// Actualizar un usuario existente (por un administrador)
export const updateUser = async (req, res) => {
    try {
        const { identification, firstName, lastName, address, phone, role, photo, status } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { identification, firstName, lastName, address, phone, role, photo, status },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        logger.error("Error updating user:", error);
        res.status(500).json({ message: "Error updating user", error });
    }
};

// Cambiar el estado del usuario (por un administrador)
export const changeUserStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.status = status;
        await user.save();

        res.status(200).json({ message: "User status updated successfully", user });
    } catch (error) {
        logger.error("Error updating user status:", error);
        res.status(500).json({ message: "Error updating user status", error });
    }
};

// Cambiar el estado del usuario a inactivo (por un administrador)
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.status = 'inactive';
        await user.save();
        res.status(200).json({ message: "User status changed to inactive" });
    } catch (error) {
        logger.error("Error updating user status:", error);
        res.status(500).json({ message: "Error updating user status", error });
    }
};
