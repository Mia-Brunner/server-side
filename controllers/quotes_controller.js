const { getAllQuotes, 
				getQuoteById, 
				addQuote, 
				deleteQuote, 
				updateQuote 
			} = require("../utils/quote_utilities")

const getQuotes = function(req, res) {
	// res.send(getAllQuotes(req))
	getAllQuotes(req)
		.sort({
			modified_date: -1
		})
		.exec((err, quotes) => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
			}
			res.send(quotes)
		})
}

const getQuote = function(req, res) {
	// execute the query from getPostById
	getQuoteById(req).exec((err, quote) => {
		if (err) {
			res.status(404)
			res.send("Quote not found")
		}
		res.send(quote)
	})
}

const makeQuote = function(req, res) {
	// save the Quote instance from addQuote
	addQuote(req).save((err, quote) => {
		if (err) {
			console.log(err)
			res.status(500)
			res.json({
				error: err.message
			})
		}
		res.status(201)
		res.send(quote)
	})
}

const removeQuote = function(req, res) {
			// execute the query from deleteQuote
			deleteQuote(req.params.id).exec(err => {
				if (err) {
					res.status(500)
					res.json({
						error: err.message
					})
				}
				res.sendStatus(204)
			})
		}

const changeQuote = function(req, res) {
		// Check for error from middleware
		if (req.error) {
			res.status(req.error.status)
			res.send(req.error.message)
		} else {
			// execute the query from updateQuote
			updateQuote(req).exec((err, quote) => {
				if (err) {
					res.status(500)
					res.json({
						error: err.message
					})
				}
				res.status(200)
				res.send(quote)
			})
		}
}

module.exports = {
	getQuotes,
    getQuote,
    makeQuote,
    removeQuote,
		changeQuote

}