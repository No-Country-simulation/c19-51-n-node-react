import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    identification: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: false
    },
    phone: {
        type: String,
        trim: true,
        required: false
    },
    role: {
        type: String,
        enum: ['administrator', 'seller'],
        default: 'seller',
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
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
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

userSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

export default mongoose.model('User', userSchema);
