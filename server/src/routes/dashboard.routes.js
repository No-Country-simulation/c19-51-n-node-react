import { Router } from 'express'
import dashboardController from '../controllers/dashboard.controller.js';

const router = Router();

router.get('/stock-by-category', dashboardController.sumStockByCategory);
router.get('/orders-by-status', dashboardController.countOrdersByStatus);
router.get('/order-value-by-status', dashboardController.sumOrderValueByStatus);

export default router;