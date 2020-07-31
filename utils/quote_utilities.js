const Quote = require("../models/quote");

// let dataFile = "../data/quotes.json"
// let appQuotes = require(dataFile)
// const fs = require("fs");

const getAllQuotes = function(req) {
	return Quote.find()
};

const getQuoteById = function(req) {
	return Quote.findById(req.params.id);
};

// add quote
// returns a quote object
const addQuote = function (req) {

	console.log(req.body)
	return new Quote(req.body);
};

// // Returns the next available id for a blog post
// function getNextId() {
// 	let sortedIds = Object.keys(appQuotes).sort()
// 	nextId = (sortedIds.length != 0) 
// 			? parseInt(sortedIds[sortedIds.length-1]) + 1
// 			: 1
// 	return nextId
// }

const deleteQuote = function(id) {
	return Quote.findByIdAndRemove(id);
};

const updateQuote = function(req) {
	req.body.modified_date = Date.now();
	// use new:true to return the updated post rather than the original post
	return Quote.findByIdAndUpdate(req.params.id, req.body, {
			new: true
	});
}

module.exports = {
	getAllQuotes,
	getQuoteById,
	addQuote,
  deleteQuote,
  updateQuote
}

