import { Router } from 'express';
import {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
} from '../controllers/orders.controller.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import validateObjectId from '../middlewares/validateObjectId.js';

const router = Router();

// Obtener todas las órdenes
router.get('/', getAllOrders);

// Obtener una orden por ID
router.get('/:id', authenticateToken, validateObjectId, getOrderById);

// Crear una nueva orden
router.post('/', authenticateToken, createOrder);

// Actualizar una orden existente
router.put('/:id', authenticateToken, validateObjectId, updateOrder);

// Eliminar una orden
router.delete('/:id', authenticateToken, validateObjectId, deleteOrder);

export default router;
