import Product from "../models/product.model.js";
import Category from "../models/category.model.js"
import logger from '../utils/logger.js';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category', 'name');
        res.status(200).json(products);
    } catch (error) {
        logger.error("Error retrieving products:", error);
        res.status(500).json({ message: "Error retrieving products", error });
    }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category', 'name');
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        logger.error("Error retrieving product:", error);
        res.status(500).json({ message: "Error retrieving product", error });
    }
};

// // Crear un nuevo producto (por un administrador?)
// export const createProduct = async (req, res) => {
//     try {
//         let { productId, brand, model, description, specs, price, stock, image, categoryName } = req.body;

//         const existingProduct = await Product.findOne({ productId });
//         if (existingProduct) {
//             return res.status(400).json({ message: "Product already exist" });
//         }

//         // Buscar categoría
//         const category = await Category.findOne({ name: categoryName });
//         if (!category) {
//             return res.status(400).json({ message: "Category not found" })
//         };

//         const newProduct = new Product({
//             productId,
//             image,
//             brand,
//             model,
//             description,
//             specs,
//             price,
//             stock,
//             category: category._id
//         });

//         await newProduct.save();

//         // Poblar la categoría con el nombre antes de devolver la respuesta
//         await newProduct.populate('category', 'name');

//         res.status(201).json({ message: "Product created successfully", product: newProduct });
//     } catch (error) {
//         logger.error("Error creating product:", error);
//         res.status(500).json({ message: "Error creating product", error });
//     }
// };

export const createProduct = async (req, res) => {
    try {
        const { productId, brand, model, description, specs, price, stock, image, categoryName } = req.body;

        // Verificar si el producto ya existe
        const existingProduct = await Product.findOne({ productId });
        if (existingProduct) {
            return res.status(400).json({ message: "Product already exists" });
        }

        // Buscar la categoría por nombre
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(400).json({ message: "Category not found" });
        }

        // Crear un nuevo producto
        const newProduct = new Product({
            productId,
            brand,
            model,
            description,
            specs,
            price,
            stock,
            image,
            category: category._id // Usar el ID de la categoría encontrada
        });

        // Guardar el producto en la base de datos
        await newProduct.save();

        // Poblar la categoría con el nombre antes de devolver la respuesta
        await newProduct.populate('category', 'name');

        res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        });
    } catch (error) {
        // Loguear el error y enviar una respuesta con el código de error 500
        logger.error("Error creating product:", error);
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
};

// Actualizar un producto existente (por un administrador?)
export const updateProduct = async (req, res) => {
    try {
        const { productId, brand, model, description, specs, price, stock, image, categoryName } = req.body;

        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(400).json({ message: "Category not found" })
        };

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { productId, brand, model, description, specs, price, stock, image, category: category._id },
            { new: true, runValidators: true }
        ).populate('category', 'name');

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
