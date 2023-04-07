const mongoose = require("mongoose");

const randevuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tc: {
        type: String,
        required: true
    },
    tarih: {
        type: Date,
        required: true
    }
},  
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Randevu", randevuSchema);
