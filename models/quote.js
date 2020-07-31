const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define Quote schema
const Quote = new Schema({
	name: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	}
})

module.exports = mongoose.model("Quote", Quote)