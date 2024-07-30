import { Router } from 'express';
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orders.controller.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import validateObjectId from '../middlewares/validateObjectId.js';
import { validateCreateOrder, validateUpdateOrder } from '../middlewares/validation.js'

const router = Router();

// Obtener todas las órdenes
router.get('/', getAllOrders);

// Obtener una orden por ID
router.get('/:id', validateObjectId, getOrderById);

// Crear una nueva orden
router.post('/', validateCreateOrder, createOrder);

// Actualizar una orden existente
router.put('/:id', validateObjectId, validateUpdateOrder, updateOrder);

// Eliminar una orden
router.delete('/:id', validateObjectId, deleteOrder);

export default router;
