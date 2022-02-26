const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        maxlength: 300,
        trim: true
    },
    html: {
        type: String,
        required: true,
        trim: true
    },
})

constc = mongoose.model('Blog', blogSchema, 'blogs')

module.exports = BlogModel