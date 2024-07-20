import { z } from 'zod';

const registerSchema = z.object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    lastName: z.string().nonempty({ message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    identification: z.string().optional(),
    role: z.enum(['administrator', 'seller']).optional(),
    photo: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional()
});

const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().nonempty({ message: "Password is required" }),
});

const createUserSchema = z.object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    lastName: z.string().nonempty({ message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    identification: z.string().optional(),
    role: z.enum(['administrator', 'seller']).optional(),
    photo: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional()
});

const updateUserSchema = z.object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    lastName: z.string().nonempty({ message: "Last name is required" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    identification: z.string().optional(),
    role: z.enum(['administrator', 'seller']).optional(),
    photo: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional()
});

export const validateRegister = (req, res, next) => {
    try {
        registerSchema.parse(req.body);
        next();
    } catch (e) {
        return res.status(400).json({ errors: e.errors });
    }
};

export const validateLogin = (req, res, next) => {
    try {
        loginSchema.parse(req.body);
        next();
    } catch (e) {
        return res.status(400).json({ errors: e.errors });
    }
};

export const validateCreateUser = (req, res, next) => {
    try {
        createUserSchema.parse(req.body);
        next();
    } catch (e) {
        return res.status(400).json({ errors: e.errors });
    }
};

export const validateUpdateUser = (req, res, next) => {
    try {
        updateUserSchema.parse(req.body);
        next();
    } catch (e) {
        return res.status(400).json({ errors: e.errors });
    }
};
