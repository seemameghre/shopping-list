const router = require('express').Router()

const List = require("../models/lists.model")

router.route('/:username')
    .get((req, res) => {
        List.find({username:req.params.username})
            .then((lists) => res.json({success:true, count: lists.length, data:lists}))
            .catch(err => res.status(400).json('Error: '+err))
    })
router.route('/id/:listid')
    .get((req,res) => {
        console.log(req.params.listid)
        List.findById(req.params.listid)
            .then(list => res.json(list))
            .catch(err => res.status(400).json('Error: '+err))
    })
    .delete((req,res) => {
        List.findByIdAndDelete(req.params.listid)
        .then(list => res.json({success: true, data: list}))
        .catch(err => res.status(400).json('Error: '+err))
    })
router.route('/:username/add')
    .post((req,res) => {
        const username = req.params.username
        const description = req.body.description
        const shoppingdate = req.body.shoppingdate !== undefined ? Date.parse(req.body.shoppingdate) : new Date()
        const items = req.body.items
        const list = new List({
            description: description,
            username: username,
            shoppingdate: shoppingdate,
            items:items
        })
        console.log(list)
        list.save()
            .then(() => res.json({success: true, data: list}))
            .catch(err => res.status(400).json('Error: '+err))
    })
router.route('/update/:listid')
    .post((req,res) => {
        List.findById(req.params.listid)
            .then(list => {
                list.description = req.body.description
                list.shoppingdate = req.body.shoppingdate !== undefined ? Date.parse(req.body.shoppingdate) : new Date()
                list.items = req.body.items
                list.save()
                    .then(() => res.json('List updated'))
                    .catch(err => res.status(400).json('Error: '+err))
            })
            .catch(err => res.status(400).json('Error: '+err))
    })
module.exports = router