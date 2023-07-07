require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express() 

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Tu app esta listo por http://localhost:${port}`)
})