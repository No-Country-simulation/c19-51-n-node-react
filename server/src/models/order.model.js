import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    items:
        [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                // required: true
            },
            description: {
                type: String,
                // required: false
            },
            quantity: {
                type: Number,
                min: 1,
                // required: true
            },
            price: {
                type: Number,
                // required: true
            },
            totalItemPrice: {
                type: Number,
                // required: true
            }
        }],
    totalOrder: {
        type: Number,
        // required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'in_process', 'cancelled'],
        default: 'pending',
        // required: true
    },
    orderDate: {
        type: Date,
        default: Date.now,
        // required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware para actualizar el campo 'updatedAt' antes de guardar
orderSchema.pre('save', async function (next) {
    this.updatedAt = Date.now();

    next();
});

orderSchema.pre('findOneAndUpdate', async function (next) {
    this.set({ updatedAt: Date.now() })

    next();
});

export default mongoose.model('Order', orderSchema);
