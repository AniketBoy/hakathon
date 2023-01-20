const express = require("express")
const router = express.Router();

//pre_requisites
router.use(express.urlencoded({ extended: true }))
router.use(express.static('public'))

//Routes
router.get("/", (req, res) => {
    res.render("price")
})

module.exports = router