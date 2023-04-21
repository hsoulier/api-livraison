// Add Express
const { default: axios } = require("axios")
const express = require("express")

// Initialize Express
const app = express()

// Add body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.json())
// Create GET request
app.get("/api/ping", (req, res) => {
  res.send("PONG")
})

// Initialize server
app.listen(5001, () => {
  console.log("Running on port 5001.")
})

module.exports = app
