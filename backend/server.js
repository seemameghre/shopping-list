const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const port = process.env.port || 5000

const app = express()

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("Connected to mongodb.")
})

const listRouter = require("./routes/list"); 
const categoryRouter = require("./routes/category");
const msgRouter = require("./routes/message")

app.use('/lists',listRouter)
app.use('/category',categoryRouter)
app.use('/message',msgRouter)

app.listen(port, () => {
    console.log("Server started at port "+port)
})