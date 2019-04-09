const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
        maxlength: 100000,
    },
    publish: {
        type: Boolean,
        required: true
    },
    image: {
        type: Buffer,
        contentType: String,
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Blog };