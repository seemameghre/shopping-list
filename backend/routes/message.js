const sendMessage = require("../utils/send-message")

const router = require('express').Router()

router.route('/')
    .post((req, res) => {
        // console.log(req.body)
        const msg_header = req.body.description+" "+req.body.shoppingdate+" "
        const items_txt = req.body.items && req.body.items.map(item => item.itemname+"-"+item.quantity+"-"+item.note).join(" ")
        sendMessage(msg_header+items_txt)
    })
module.exports = router