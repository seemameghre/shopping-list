const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    username: String,
    categoryname: {type: String},
    items:[String]
})

const Category = mongoose.model('Category',categorySchema)
module.exports = Category