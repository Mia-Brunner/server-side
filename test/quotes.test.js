const expect = require("expect")
const fs = require("fs")
const utilities = require("../utils/utilities")
// Use test data file
const testDataFile = "../data/quotes.test.json"
// When we write to the file, the path is relative to app.js
const testDataFileRelative= utilities.getDataFileRelativeToApp(testDataFile)

beforeEach(() => {
  // Set and load data from test data file
	setupData()
})

describe("test setup", () => {
	it("should load data", () => {
		let contents = fs.readFileSync(testDataFileRelative, "utf-8")
		expect(contents.length).toBeGreaterThan(3)
	})
})

describe("getAllQuotes with one quote", () => {
	it("should get a quote if one exists", () => {
		// Pass an empty req object
		expect(Object.keys(utilities.getAllQuotes({})).length).toBe(1)
	})
	it("user of first quote should be Batman", () => {
		expect(utilities.getAllQuotes({})["1"].name).toBe("Batman")
	})
})

describe("getQuoteById", () => {
	// Define a req object with the expected structure to pass a parameter
	const req = {
		params: {
			id: "1"
		}
	}
	it("user of quote with id 1 should be Batman", () => {
		expect(utilities.getQuoteById(req).name).toBe("Batman")
	})
})

describe("addQuote", () => {
	const req = {
		body: {
			name: "Batman",
      phone: "0411111111",
      message: "Need powerpoints installed in the batcave"
    }
		}
	it("should add a quote", () => {
		// define a req object with expected structure
		let quote = utilities.addQuote(req)
		expect(quote.name).toBe(req.body.name)
	})
	it("should update all blogQuotes", () => {
		let quote = utilities.addQuote(req)
		let quotes= utilities.getAllQuotes({})
		expect(Object.keys(quotes).length).toBe(2)
	})
})

// delete
describe("deleteQuote", () => {
	let id = "1"
	it("should delete the specified quote", () => {
		let blogQuotes = utilities.deleteQuote(id)
		let ids = Object.keys(blogQuotes)
		expect(ids.includes("1")).toBe(false)
	})
})

// update
describe("updateQuote", () => {
	it("should update a quote", () => {
		// set up a req object
		const req = {
			params: {
				id: "1"
			},
			body: {
				name: "Updated name",
        phone: "updated number",
				message: "This is an updated message!"
			}
		}
		let quote = utilities.updateQuote(req)
		expect(quote.name).toBe(req.body.name)
	})
})

// Setup and tear down functions
function setupData() {
	let testQuoteData = {}
	let testQuote = {}
	testQuote.name = "Batman"
  testQuote.phone = "0411111111"
	testQuote.message = "Need powerpoints installed in the batcave"
	testQuoteData["1"] = testQuote

	fs.writeFileSync(testDataFileRelative, JSON.stringify(testQuoteData))
	testBlogQuotes = utilities.loadData(testDataFileRelative)
}