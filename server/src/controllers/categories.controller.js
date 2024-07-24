import Category from "../models/category.model.js"
import logger from "../utils/logger.js"

// Obtener todos las categorias
export const getAllCategories = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json(category);
    } catch (error) {
        logger.error("Error retrieving categories:", error);
        res.status(500).json({ message: "Error retrieving categories", error });
    }
};

// Obtener una categoria por ID
export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" })
        }
        res.status(200).json(category);
    } catch (error) {
        logger.error("Error retrieving category:", error);
        res.status(500).json({ message: "Error retrieving category", error })
    }
};

// Crear una nueva categoria (por un administrador?)
export const createCategory = async (req, res) => {
    try {
        let { categoryId, name } = req.body;

        const existingCategory = await Category.findOne({ categoryId });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exist" });
        }

        const NewCategory = new Category({
            categoryId,
            name
        });

        await NewCategory.save();

        res.status(201).json({ message: "Category created succsessfully", category: NewCategory });

    } catch (error) {
        logger.error("Error creating category", error);
        res.status(500).json({ message: "Error creating category", error });
    }
};

// Actualizar una categoria existente (por un administrador?)
export const updateCategory = async (req, res) => {
    try {
        const { categoryId, name } = req.body;

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { categoryId, name },
            { new: true, runValidators: true }
        )

        if (!category) {
            return res.status(404).json({ message: "Category not found" })
        }
        res.status(200).json({ message: "Category updated successfully", category })
    } catch (error) {
        logger.error("Error retrieving category", error);
        res.status(500).json({ message: "Error updating category", error })
    }
};

// Eliminar una categoria existente (por un administrador?)

export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" })
        }
        res.status(200).json({ message: "Category deleted successefully" });
    } catch (error) {
        logger.error("Error retrieving category", error);
        res.status(500).json({ message: "Error retrieving category", error })
    }
};
