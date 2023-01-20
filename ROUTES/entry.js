const express = require("express")
const router = express.Router()

//Pre_requisites
router.use(express.urlencoded({ extended: true }))
router.use(express.static('public'))

//Routes
router.get("/", (req, res) => {
    res.render("basepage")
})
router.get("/base", (req, res) => {
    res.render("home")
})

module.exports = router