const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sentenceSchema = new Schema({
    sentence: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },
    mean: {
        type: String,
        required: true,
        trim: true,
        maxlength: 300,
    },
    note: {
        type: String,
        trim: true,
        maxlength: 300,
    },
    topics: [String],
    isChecked: {
        type: String,
        required: true,
        trim: true,
        default: false
    },
})

const SentenceModel = mongoose.model("sentence", sentenceSchema, 'sentences')

module.exports = SentenceModel