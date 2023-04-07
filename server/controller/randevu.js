const Randevu = require("../models/randevu.js");

const getAll = async(req, res) => {
    try {
        const allRandevu = await Randevu.find();
        res.status(200).json(allRandevu)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getSingle = async(req, res) => {
    try {
        const randevu = await Randevu.findById(req.params.id)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const create = async(req, res) => {
    try {
        const createRandevu = await Randevu.create(req.body);
        res.status(200).json(createRandevu)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const update = async(req, res) => {
    try {
        const updateRandevu = await Randevu.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json({updateRandevu})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const deleteRandevu = async(req, res) => {
    try {
        await Randevu.findByIdAndDelete(req.params.id);
        res.status(200).json("Başarıyla silindi");
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAll, getSingle, create, update, deleteRandevu}