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

const createProductSchema = z.object({
    productId: z.string().nonempty({ message: 'productId is required' }),
    brand: z.string().nonempty({ message: 'Brand is required' }),
    model: z.string().nonempty({ message: 'Model is required' }),
    description: z.string().optional(),
    specs: z.string().optional(),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    stock: z.number().int().positive({ message: 'Stock must be a positive number' }),
    image: z.string().optional(),
    categoryName: z.string().nonempty({ message: 'Category name is required' })
});

const updateProductSchema = createProductSchema.partial();

export const validateCreateProduct = (req, res, next) => {
    try {
        req.body = createProductSchema.parse(req.body);
        next();
    } catch (e) {
        res.status(400).json({ errors: e.errors });
    }
};

export const validateUpdateProduct = (req, res, next) => {
    try {
        req.body = updateProductSchema.parse(req.body);
        next();
    } catch (e) {
        res.status(400).json({ errors: e.errors });
    }
};
