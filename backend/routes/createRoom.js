const express = require('express')
const router = express.Router()
const roomModel = require("../models/roomModel")
const { route } = require('./Slido')
const { v4: uuidV4 } = require("uuid")


router.get("/", (req, res) => {
    res.redirect(`/createRoom/${uuidV4()}`)
})

router.get("/:room", async (req, res) => {
    res.json({"roomId": req.params.room})
    try {
        await roomModel.create({ roomId: req.params.room })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router