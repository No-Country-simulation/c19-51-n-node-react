import Product from "../models/product.model.js";
import logger from '../utils/logger.js';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        logger.error("Error retrieving products:", error);
        res.status(500).json({ message: "Error retrieving products", error });
    }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        logger.error("Error retrieving product:", error);
        res.status(500).json({ message: "Error retrieving product", error });
    }
};

// Crear un nuevo producto (por un administrador?)
export const createProduct = async (req, res) => {
    try {
        let { productId, brand, model, description, specs, price, qty, image, category } = req.body;

        const existingProduct = await Product.findOne({ productId });
        if (existingProduct) {
            return res.status(400).json({ message: "Product already exist" });
        }

        const newProduct = new Product({
            productId,
            image,
            brand,
            model,
            description,
            specs,
            price,
            qty,
            category
        });

        await newProduct.save();

        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        logger.error("Error creating product:", error);
        res.status(500).json({ message: "Error creating product", error });
    }
};

// Actualizar un producto existente (por un administrador?)
export const updateProduct = async (req, res) => {
    try {
        const { productId, brand, model, description, specs, price, qty, image, category } = req.body;

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { productId, brand, model, description, specs, price, qty, image, category },
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        logger.error("Error updating product:", error);
        res.status(500).json({ message: "Error updating product", error });
    }
};

// Eliminar un producto existente (por un administrador?)
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        logger.error("Error updating product:", error);
        res.status(500).json({ message: "Error deleting product", error });
    }
};
