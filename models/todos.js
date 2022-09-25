const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    timeCreated: {
        type: Date,
        required: true,
        default: Date.now,
        immutable: true
    }
})

module.exports = mongoose.model('Todo', todoSchema)