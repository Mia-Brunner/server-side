const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const quoteRouter = require("./routes/quotes_routes")

const port = 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use("/quotes", quoteRouter)

app.listen(port, () => {
	console.log(`Electrician app listening on port ${port}`)
})