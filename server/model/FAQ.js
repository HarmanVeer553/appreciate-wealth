const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    fruit: {
        type: String,
        required: true,
        trim: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('FAQ', faqSchema);
