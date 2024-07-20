import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: String,
        trim: true,
        require: true
    },
    name: {
        type: String,
        trim: true,
        require: true
    }
});

// Middleware para actualizar el campo `updatedAt` antes de guardar
categorySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

categorySchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

export default mongoose.model('Category', categorySchema);
