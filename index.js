const express = require("express")
const errorHandler = require("./middlewares/errorHandler")
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config()

connectDb();
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

//built in middleware
app.use('/api/contacts', require("./routes/contactRoutes"))
app.use('/api/users', require("./routes/userRoutes"))

//error Handler
app.use(errorHandler)

app.listen(port, ()=>
{
    console.log(`Server running on ${port}`)
})