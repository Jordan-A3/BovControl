const { Schema, model } = require('mongoose')

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

module.exports = model('Animal', AnimalSchema)