const express = require("express")
const app = express()
const session = require("express-session")
//router
const loginRoute = require("./ROUTES/auth")
const entryRoute = require("./ROUTES/entry")
const price_panelRoute = require("./ROUTES/price_panel")

app.use(session({ secret: "Not a secret" }))

// app.use(cookieparser)
app.get("/", (req, res) => {
    res.redirect("/api/auth/login")
})
//pre_requisites
app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }))

const mid = (req, res, next) => {
    console.log("this is the cookie cookieeeeeeeeeeeeeeeeeeeeeeeeeeeeee", req.body.user_id)
    next()
}

app.use(mid)

//routes
app.use("/api/auth", loginRoute)
app.use("/api/home", entryRoute)
app.use("/api/price", price_panelRoute)

app.listen(3000, () => {
    console.log("Listing to port 3000")

})


















// const middle = (req, res, next) => {
//     try{



//         next()
//     }catch(err){
//         next()
//     }
// }

// app.use((req, res, next) => {
//     try {
//         console.log(req.session.user_id)
//     }
//     catch {

//     }
// })
