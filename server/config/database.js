const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGO_URI

const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB ile bağlantı kuruldu")
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB