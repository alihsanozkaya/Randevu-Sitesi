require("dotenv/config")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectDB = require("./config/database.js")
const randevu = require("./router/randevu.js")
const app = express()
const PORT = process.env.PORT
connectDB();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use("/api", randevu)

app.listen(PORT, () => {
    console.log("Sunucuyla bağlantı kuruldu PORT: " +PORT)
})