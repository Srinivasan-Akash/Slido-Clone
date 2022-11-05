const mongoose = require("mongoose")

const Schema = mongoose.Schema

const slidoSchema = new Schema ({
    slidoName: {
        type: String,
        required: true
    },
    
    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Slido', slidoSchema);