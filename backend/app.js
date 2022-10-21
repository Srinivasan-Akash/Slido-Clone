require("dotenv").config()
const express = require("express")
const userRoute = require("./routes/User")

const app = express()
app.use("/user", userRoute)

app.get("/", (req, res) => {
    res.send("hi")
})

app.listen(process.env.PORT, () => {
    console.log("Running...")
    console.log(process.env.PORT)
})