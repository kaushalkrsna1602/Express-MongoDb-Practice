const { custumers } = require("../models/custumerModels")
const express = require("express")

const getCustumers = async (req , res) => {
    try {
        let data = await custumers.find({})
        res.status(200).json(data)
    } catch (error) {
        console.log("Error in getcustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const addCustumers = async (req , res) => {
    try {
        let data = await custumers.insertOne(req.body)
        res.status(200).json({message : "New Custumers Addded"})
    } catch (error) {
        console.log("Error in addCustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateCustumers = async (req , res) => {
    try {
        let data = await custumers.findByIdAndUpdate({_id : req.params.id},req.body)
        res.status(200).json({message : "Custumers Updated"})
    } catch (error) {
        console.log("Error in updateCustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteCustumers = async (req , res) => {
    try {
        let data = await custumers.findByIdAndDelete({_id : req.params.id})
        res.status(200).json({message : "Custumers deleted"})
    } catch (error) {
        console.log("Error in deleteCustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {getCustumers , addCustumers , updateCustumers , deleteCustumers}