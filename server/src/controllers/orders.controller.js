import Order from '../models/order.model.js';
import Product from '../models/product.model.js';

// Obtener todas las órdenes
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('products.product');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las órdenes', error });
    }
};

// Obtener una orden por ID
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('products.product');
        if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la orden', error });
    }
};

// Crear una nueva orden
export const createOrder = async (req, res) => {
    const { products, description } = req.body;
    try {
        let totalPrice = 0;

        // Validar y actualizar la cantidad de productos
        for (let item of products) {
            const product = await Product.findById(item.productId);
            if (!product) {
                return res.status(404).json({ message: `Producto con ID ${item.productId} no encontrado` });
            }
            if (product.qty < item.qty) {
                return res.status(400).json({ message: `Cantidad insuficiente para el producto ${product.model}` });
            }
            product.qty -= item.qty;
            await product.save();
            totalPrice += product.price * item.qty;
        }

        const newOrder = new Order({
            products,
            description,
            totalPrice
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la orden', error });
    }
};

// Actualizar una orden existente
export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('products.product');
        if (!updatedOrder) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la orden', error });
    }
};

// Eliminar una orden
export const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json({ message: 'Orden eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la orden', error });
    }
};
