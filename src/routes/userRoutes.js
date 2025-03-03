const express = require("express")
const { getUser, addUser, updateUser, deleteUser } = require("../controllers/userController")

const userRouter = express.Router()


userRouter.get("/users" , getUser )

userRouter.post("/users" , addUser )

userRouter.put("/users/:id" , updateUser )

userRouter.delete("/users/:id" , deleteUser )

module.exports = { userRouter }
