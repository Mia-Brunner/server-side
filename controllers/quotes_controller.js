const { getAllQuotes, getQuoteById } = require("../utils/utilities")

const getQuotes = function(req, res) {
	res.send(getAllQuotes(req))
}

const getQuote = function(req, res) {
	let quote = getQuoteById(req)
	if (quote) res.send(quote)
	else {
		res.status(404)
		res.send(req.error)
	}
}
const makeQuote = function(req, res) {
	let quote = addQuote(req)
	if (quote) {
		res.status(201)
		res.send(quote)
	} else {
		res.status(500)
		res.send(`Error occurred: ${req.error}`)
	}
}

const deleteQuote = function(req, res) {
	let appQuotes = deleteQuote(req.params.id)
	res.send(appQuotes)
}

const changeQuote = function(req, res) {
	let quote = updateQuote(req)
	if (quote) {
		res.status(200)
		res.send(quote)
	} else {
		res.status(500)
		res.send(`Error occurred: ${req.error}`)
	}
}

module.exports = {
	getQuotes,
    getQuote,
    makeQuote,
    deleteQuote,
    changeQuote,
}