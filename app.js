require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express() 

app.use(cors())


const port = process.env.PORT || 3008


app.listen(port, () => {
    console.log(`La app esta corriendo en http://localhost:${port}`)
})

dbConnect()