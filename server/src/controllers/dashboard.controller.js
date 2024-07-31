import Product from '../models/product.model.js';
import Order from '../models/order.model.js';
import Category from '../models/category.model.js';
import logger from '../utils/logger.js';

// Sumar todos los stock por categoría
export const sumStockByCategory = async (req, res) => {
    try {
        const stockByCategory = await Product.aggregate([
            {
                $group: {
                    _id: "$category",
                    totalStock: { $sum: "$stock" }
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "_id",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: "$category"
            },
            {
                $project: {
                    _id: 0,
                    category: "$category.name",
                    totalStock: 1
                }
            }
        ]);

        res.status(200).json(stockByCategory);
    } catch (error) {
        logger.error('Error adding stock by category:', error);
        res.status(500).json({ message: 'Error adding stock by category', error });
    }
};

// Sumar la cantidad total de órdenes según su estado
export const countOrdersByStatus = async (req, res) => {
    try {
        const ordersByStatus = await Order.aggregate([
            {
                $group: {
                    _id: "$status",
                    totalOrders: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(ordersByStatus);
    } catch (error) {
        logger.error('Error adding the total number of orders by status:', error);
        res.status(500).json({ message: 'Error adding the total number of orders by status', error });
    }
};

// Sumar el valor total de las órdenes de acuerdo a su estado
export const sumOrderValueByStatus = async (req, res) => {
    try {
        const orderValueByStatus = await Order.aggregate([
            {
                $group: {
                    _id: "$status",
                    totalValue: { $sum: "$totalOrder" }
                }
            }
        ]);

        res.status(200).json(orderValueByStatus);
    } catch (error) {
        logger.error('Error adding the total value of orders by status:', error);
        res.status(500).json({ message: 'Error adding the total value of orders by status', error });
    }
};

export default { sumStockByCategory, countOrdersByStatus, sumOrderValueByStatus };
