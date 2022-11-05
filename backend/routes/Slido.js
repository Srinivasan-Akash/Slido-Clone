const express = require('express')
const router = express.Router()
const slidoModel = require("../models/slidoModel")


router.post("/createSlido", async (req, res) => {
    const {slidoName, startDate, endDate} = req.body
    console.log(req.body)

    try {
        const slido = await slidoModel.create({ slidoName, startDate, endDate })
        res.status(200).json(slido)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router