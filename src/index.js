const express = require("express")
const app = express()
app.use(express.json())
const {connectDB} = require("./lib/database")
const { userRouter } = require("./routes/userRoutes")
const { productRouter } = require("./routes/productRoutes")


connectDB()

app.use(userRouter)
app.use(productRouter)




app.listen(8080 , () => {
    console.log("Server is running in port 8080");
})