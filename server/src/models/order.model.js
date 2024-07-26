import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    qty: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    priceu: {
        type: Number,
        trim: true,
        required: true
    },
    totalItem: {
        type: Number,
        trim: true,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware para actualizar el campo 'updatedAt' antes de guardar
orderSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

orderSchema.pre('findOneAndUodate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

export default mongoose.model('order', orderSchema)