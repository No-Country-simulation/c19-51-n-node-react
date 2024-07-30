import Order from '../models/order.model.js';
import Product from '../models/product.model.js';
import logger from '../utils/logger.js';

// Obtener todas las órdenes
export const getAllOrders = async (req, res) => {
    try {
        // const orders = await Order.find().populate('products.product');
        const orders = await Order.find().populate('items.productId', 'description price');
        res.status(200).json(orders);
    } catch (error) {
        logger.error('Error retrieving orders:', error);
        res.status(500).json({ message: 'Error retrieving orders', error });
    }
};

// Obtener una orden por ID
export const getOrderById = async (req, res) => {
    try {
        // const order = await Order.findById(req.params.id).populate('products.product');
        const order = await Order.findById(req.params.id).populate('items.productId', 'description price');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        logger.error('Error retrieving order:', error)
        res.status(500).json({ message: 'Error retrieving order', error });
    }
};

// Crear una nueva orden
export const createOrder = async (req, res) => {
    try {
        let { items, status } = req.body;

        // Generar un número de orden único
        const orderId = `ORD-${Date.now()}`;

        const orderItems = await Promise.all(items.map(async item => {
            const product = await Product.findById(item.productId);
            if (product) {
                return {
                    ...item,
                    description: product.description,
                    price: product.price,
                    totalItemPrice: product.price * item.quantity
                };
            }
            return item;
        }));

        const totalOrder = orderItems.reduce((sum, item) => sum + item.totalItemPrice, 0);

        const newOrder = new Order({
            orderId,
            items: orderItems,
            totalOrder,
            status
        });

        await newOrder.save();

        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        logger.error('Error creating order:', error);
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Actualizar una orden existente (por un administrador?)
export const updateOrder = async (req, res) => {
    try {
        const { items, status } = req.body;

        // Obtener la orden actual para preservar los items existentes
        const existingOrder = await Order.findById(req.params.id);
        if (!existingOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        let updatedOrderData = { items, status };

        if (items) {
            const existingItems = existingOrder.items;

            const newItems = await Promise.all(items.map(async item => {
                const product = await Product.findById(item.productId);
                if (product) {
                    return {
                        ...item,
                        description: product.description,
                        price: product.price,
                        totalItemPrice: product.price * item.quantity
                    };
                }
                return item;
            }));

            // Combinar los items existentes con los nuevos items
            const allItems = [...existingItems, ...newItems];

            const totalOrder = allItems.reduce((sum, item) => sum + item.totalItemPrice, 0);

            updatedOrderData = {
                ...updatedOrderData,
                items: allItems,
                totalOrder,
            };
        }

        if (status) {
            updatedOrderData.status = status;
        }

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, updatedOrderData, { new: true, runValidators: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
    } catch (error) {
        logger.error('Error updating order:', error);
        res.status(500).json({ message: 'Error updating order', error });
    }
};

// Cambiar el estado de la orden (por un administrador?)
// export const changeOrderStatus = async (req, res) => {
//     try {
//         const { status } = req.body;

//         const order = await Order.findById(req.params.id);

//         if (!order) {
//             return res.status(404).json({ message: 'Order not found' });
//         }

//         order.status = status;
//         await order.save();

//         res.status(200).json({ message: 'Order status updated successfully', order });

//     } catch (error) {
//         logger.error('Error updating status order:', error);
//         res.status(500).json({ message: 'Error updating status order', error });
//     }
// };

// Cambiar estado de una orden a inactivo (por un administrador?)
export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' })
        };
        order.status = 'cancelled';
        await order.save();
        res.status(200).json({ message: 'Order cancelled successfully' });
    } catch (error) {
        logger.error('Error cencelling order:', error)
        res.status(500).json({ message: 'Error cancelling order', error });
    }
};
