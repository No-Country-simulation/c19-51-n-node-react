import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }
    ],
    description: {
        type: String,
        required: false
    },
    totalPrice: {
        type: Number,
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

orderSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

export default mongoose.model('Order', orderSchema);
