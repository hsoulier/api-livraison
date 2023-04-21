const { default: axios } = require("axios")
const express = require("express")

const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/api/ping", (req, res) => {
  res.send("PONG")
})
app.get("/api/shipping", (req, res) => {
  try {
    const { orderId, nbProducts } = req.body

    res.status(204).end()
  } catch (error) {
    res.status(500).json(error)
  }
})

// Initialize server
app.listen(5001, () => {
  console.log("Running on port 5001.")
})

module.exports = app
