const router = require('express').Router()

const Category = require("../models/category.model")

router.route('/:username')
    .get((req, res) => {
        Category.find({username:req.params.username})
            .then((categories) => res.json({data:categories, success: true, count: categories.length}))
            .catch(err => res.status(400).json({success:false, error: err}))
    })
router.route('/id/:categoryid')
    .get((req,res) => {
        Category.findById(req.params.categoryid)
            .then(category => res.json(category))
            .catch(err => res.status(400).json('Error: '+err))
    })
    .delete((req,res) => {
        Category.findByIdAndDelete(req.params.categoryid)
        .then(category => res.json('Category deleted'))
        .catch(err => res.status(400).json('Error: '+err))
    })
router.route('/:username/add')
    .post((req,res) => {
        const username = req.params.username
        const categoryname = req.body.categoryname
        const items = req.body.items
        const category = new Category({
            categoryname: categoryname,
            username: username,
            items:items
        })
        category.save()
            .then(() => res.json('Category added'))
            .catch(err => res.status(400).json('Error: '+err))
    })
router.route('/update/:categoryid')
    .post((req,res) => {
        Category.findById(req.params.categoryid)
            .then(category => {
                category.categoryname = req.body.categoryname
                category.items = req.body.items
                category.save()
                    .then(() => res.json('Category updated'))
                    .catch(err => res.status(400).json('Error: '+err))
            })
            .catch(err => res.status(400).json('Error: '+err))
    })
module.exports = router