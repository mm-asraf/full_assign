const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: String, required: true },
    image: { type: String, required: true }

}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("store", bookSchema)

