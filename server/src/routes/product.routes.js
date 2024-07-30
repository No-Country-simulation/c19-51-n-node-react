import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import validateObjectId from '../middlewares/validateObjectId.js';
import checkAdmin from '../middlewares/checkAdmin.js';
import { validateCreateProduct, validateUpdateProduct } from '../middlewares/validation.js';

const router = Router();

// Obtener todos los products
router.get('/', getAllProducts);

// Obtener un producto por ID
router.get('/:id', validateObjectId, getProductById);

// Crear un nuevoproducto (solo para administradores?)
router.post('/', validateCreateProduct, createProduct);

// Actualizar un producto existente (solo para administradores?)
router.put('/:id', validateObjectId, validateUpdateProduct, updateProduct);

// Eliminar producto (solo para administradores?)
router.delete('/:id', validateObjectId, deleteProduct);

export default router;
