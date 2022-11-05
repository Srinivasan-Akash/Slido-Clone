const mongoose = require("mongoose")

const connectToDataBase = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected To DB Sucessfully....")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = connectToDataBase