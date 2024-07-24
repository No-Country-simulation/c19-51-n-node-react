import { Router } from 'express'
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/categories.controller.js'
import validateObjectId from '../middlewares/validateObjectId.js'

const router = Router();

// Obtener todas las categorias
router.get('/', getAllCategories);

// Obtener una categoria por ID
router.get('/:id', validateObjectId, getCategoryById);

// Crear una categoria (solo para administradores?)
router.post('/', createCategory);

// Actualizar una categoria existente (solo para administradores?)
router.put('/:id', validateObjectId, updateCategory);

// Eliminar categaria (solo para administradores?)
router.delete('/:id', validateObjectId, deleteCategory);

export default router;
