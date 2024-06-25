var chai = require("chai")
var assert = chai.assert
var expect = chai.expect

var checkResult = "Hello"
var array = [1, 2, 3]

// assert.isString(array, "not an string")
// assert.isArray(array, "not an array")
// assert.isString(checkResult, "not an string")

expect(array).to.be.an("array").that.includes(5)
