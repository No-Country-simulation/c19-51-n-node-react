import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        trim: true,
        required: true
    },
    model: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    specs: {
        type: String,
        trim: true,
        required: false
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    qty: {
        type: Number,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    category: {
        type: String,
        enum: ['portatil', 'tablet', 'pc_escritorio', 'monitor', 'software', 'accesorios'],
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

// Middleware para actualizar el campo `updatedAt` antes de guardar
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

productSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

export default mongoose.model('Product', productSchema);
