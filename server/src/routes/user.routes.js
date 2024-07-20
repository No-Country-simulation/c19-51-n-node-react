import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, changeUserStatus } from '../controllers/user.controller.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import validateObjectId from '../middlewares/validateObjectId.js';
import checkAdmin from '../middlewares/checkAdmin.js';
import { validateCreateUser, validateUpdateUser } from '../middlewares/validation.js';

const router = Router();

// Obtener todos los usuarios
router.get('/', authenticateToken, getAllUsers);

// Obtener un usuario por ID
router.get('/:id', authenticateToken, validateObjectId, getUserById);

// Crear un nuevo usuario (solo para administradores)
router.post('/', authenticateToken, checkAdmin, validateCreateUser, createUser);

// Actualizar un usuario existente
router.put('/:id', authenticateToken, validateObjectId, validateUpdateUser, updateUser);

// Cambiar el estado del usuario (solo para administradores)
router.patch('/:id/status', authenticateToken, validateObjectId, checkAdmin, changeUserStatus);

// Cambiar el estado del usuario a inactivo (solo para administradores)
router.delete('/:id', authenticateToken, validateObjectId, checkAdmin, deleteUser);

export default router;
