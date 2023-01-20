const mongoose = require('mongoose')
const db = `mongodb+srv://aniket:xbzLXMUodyj29eG5@userdatabase.pmeammo.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(db)
    .then(() => {
        console.log("connection successful")
    })
    .catch((err) => {
        console.log("no connetionno connetion")
        console.log(err)
    })

const UserSchema = new mongoose.Schema({
    userid: {
        type: String,
        require: [true, "username cannot be blank"]
    },
    password: {
        type: String,
        require: [true, "password cannot be blank"]
    }
    /* address: String,
     phone_number: String,
     email: String*/
})

const userData = mongoose.model("UserData", UserSchema)
module.exports = userData
/*
UserSchema.insertMany([
    {
        userid: "Anik",
        password: "pass",
        address: "assasasa",
        phonenumber: "7004511278",
        email: "Anik@gamil.com"
    },
    {
        userid: "Anik23",
        password: "passwd",
        address: "assasasa",
        phonenumber: "700sad4511278",
        email: "Anik@gamiasdl.com"
    }]
).then(data=>{
    console.log("It Worked");
})
*/

