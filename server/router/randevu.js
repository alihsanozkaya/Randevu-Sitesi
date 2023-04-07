const express = require("express")
const router = express.Router();
const {getAll, create, update, deleteRandevu, getSingle} = require("../controller/randevu.js")

router.get("/getAll", getAll);
router.get("/:id/get", getSingle);
router.post("/create", create);
router.put("/:id/update", update);
router.delete("/:id/delete", deleteRandevu)

module.exports = router;