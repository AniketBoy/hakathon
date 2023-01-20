const express = require("express")
const userData = require("../Database")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const router = express.Router()



router.use(express.urlencoded({ extended: true }))
router.use(session({ secret: "Not a secret" }))
router.use(express.static(__dirname + '/public'));
router.use(express.static('public'))
//LOGIN----------------------------------------------
router.get("/login", (req, res) => {
    res.render("login_W")
})
router.post("/login", async (req, res) => {
    const { password, username } = req.body
    console.log(req.body)
    const data = await userData.findOne({ userid: username })
    console.log(data)
    const check = await bcrypt.compareSync(password, data.password);
    if (check) {
        console.log(req.session)
        req.session.user_id = data._id//////////////
        res.redirect("/api/home/")
    } else {
        res.send("False")
    }
})
router.get("/register", (req, res) => {
    res.render("register_W")
})
router.post("/register", async (req, res) => {
    const { password, username } = req.body
    console.log(req.body)
    const hashed_password = await bcrypt.hash(password, 10)
    const user = new userData({
        userid: username,
        password: hashed_password
    })
    await user.save()
    req.session.user_id = user._id///////////////////////
    res.redirect("/")
})
router.post("/logout", (req, res) => {
    req.session.user_id = null
    //req.session.destroy();
    res.redirect("/login")
})

router.get("")

// router.get("/secret", (req, res) => {
//     if (!req.session.user_id) {
//         res.redirect("/auth/home")
//     }
//     res.render("basepage")

// })

module.exports = router
//login end -------------------------------------------------------
