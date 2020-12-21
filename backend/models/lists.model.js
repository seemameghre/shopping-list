const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    categoryname: String,
    itemname: {type: String, required: true},
    quantity: Number,
    note: String
})
const listSchema = new Schema({
    description:{ type: String},
    username: {type: String},
    shoppingdate: {type:Date},
    items:[ItemSchema]
},{
    timestamps:true
})
const List = mongoose.model('List',listSchema)
module.exports = List