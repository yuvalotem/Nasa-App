const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    title: String,
    href: String,
    description: String
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image