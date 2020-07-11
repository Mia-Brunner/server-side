const express = require("express")
const router = express.Router()

const { getQuotes, getQuote, makeQuote, deleteQuote, changeQuote } = require("../controllers/quotes_controller")
// READ
// GET on '/quotes'
// Returns all quotes
router.get("/", getQuotes)

// READ
// GET on '/quotes/:id'
// Returns quote with given id
router.get("/:id", getQuote)

// CREATE
// POST on '/quotes'
// Creates a new quote
router.post("/", makeQuote)

// DELETE
// DELETE on '/quote/:id'
// Deletes a quote with id
router.delete("/:id", deleteQuote)

// UPDATE
// PUT on 'quote/:id'
// Updates a quote with id
router.put("/:id", changeQuote)

module.exports = router
