// Environment variables Config
require("dotenv").config()

// Importing Packages
const express = require("express")
const connectToDataBase = require("./DB")
const cors = require('cors');
const { v4: uuidV4 } = require("uuid")
const bodyParser = require('body-parser');

// Routes
const createSlidoRoute = require("./routes/Slido")
const createRoomRoute = require("./routes/createRoom")

// Init
const app = express()

// Scoket and server creation
const server = require("http").Server(app)
const io = require("socket.io")(server)

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/slido", createSlidoRoute)
app.use("/createRoom", createRoomRoute)

// Connecting to DB
connectToDataBase()

// Routes
app.get("/", (req, res) => res.send("hi"))

// Scoket IO connection
io.on("connection", socket => {
    socket.on("join-room", (roomId, userId) => {
        console.log(roomId, userId)
    })
})

app.listen(process.env.PORT, () => console.log("Running...", process.env.PORT))