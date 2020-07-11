let dataFile = "../data/quotes.json"
let appQuotes = require(dataFile)

const getAllQuotes = function(req) {
	return appQuotes
}

const getQuoteById = function(req) {
	let quote = appQuotes[req.params.id]
	if (quote) return quote
	else req.error = "Quote not found"
}

// Allows flexibility for testing
// Loads data from dataFile with fs
function loadData(path) {
  appQuotes = JSON.parse(fs.readFileSync(path,'utf8'))
}

const getDataFileRelativeToApp = function(file) {
	// Remove the ../ from the dataFile path for writing
	// because the writeFile looks for path relative to the app, not utilities.js
	return file.substring(file.lastIndexOf("../") + 3, file.length)
}

const addQuote = function(req) {
	try {
		const date = Date.now()
		let appQuote = {
			name: req.body.name,
			phone: req.body.phone,
			message: req.body.message || ""
		}
		appQuotes[getNextId()] = appQuote
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(appQuote))
		return appQuote
	}
	catch(error) {
		console.error(error)
		req.error = error
		return null
	}
}

// Returns the next available id for a blog post
function getNextId() {
	let sortedIds = Object.keys(appQuotes).sort()
	nextId = (sortedIds.length != 0) 
			? parseInt(sortedIds[sortedIds.length-1]) + 1
			: 1
	return nextId
}

const deleteQuote = function(id) {
	if (Object.keys(appQuotes).includes(id)) {
		delete appQuotes[id]
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(appQuotes))
	} 
	return appQuotes
}

const updateQuote = function(req) {
	try {
		let id = req.params.id
		if (!appQuotes[id]) throw "Quote not found"
		appQuotes[id].name = req.body.name
		appQuotes[id].phone = req.body.phone
		appQuotes[id].message = req.body.message
				? req.body.message
				: appQuotes[id].message
		appQuotes[id].modified_date = Date.now()
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(appQuotes))
		return appQuotes[id]
	} catch (error) {
		req.error = error
		return null
	}
}

module.exports = {
	getAllQuotes,
	getQuoteById,
	addQuote,
    loadData,
    deleteQuote,
    updateQuote,
	getDataFileRelativeToApp
}