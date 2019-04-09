const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        unique: 1
    },
    description: {
        type: String,
        required: true,
        maxlength: 100000,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 255
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    shipping: {
        type: Boolean,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    wood: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wood',
        required: true
    },
    frets: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    publish: {
        required: true,
        type: Boolean
    },
    images: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };