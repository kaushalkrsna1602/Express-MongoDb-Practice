const { Users } = require("../models/userModels")
const express = require("express")

const getUser = async (req , res) => {
    try {
        let data = await Users.find({})
        res.status(200).json(data)
    } catch (error) {
        console.log("Error in getUsers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const addUser = async (req , res) => {
    try {
        let data = await Users.insertOne(req.body)
        res.status(200).json({message : "New User Addded"})
    } catch (error) {
        console.log("Error in addUser Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateUser = async (req , res) => {
    try {
        let data = await Users.findByIdAndUpdate({_id : req.params.id},req.body)
        res.status(200).json({message : "user Updated"})
    } catch (error) {
        console.log("Error in updateUser Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteUser = async (req , res) => {
    try {
        let data = await Users.findByIdAndDelete({_id : req.params.id})
        res.status(200).json({message : "User deleted"})
    } catch (error) {
        console.log("Error in deleteUSer Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {getUser , addUser , updateUser , deleteUser}