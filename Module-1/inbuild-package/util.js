const util = require('util')

const text = ' Congratulation %s on his %dth birthday'

const result = util.format(text, "Mathew" , 19)

console.log(result)

const name = "Yoseph"
const age = 46;
const formattedString  = util.format("Name: %s, Age: %d", name,age)
console.log(formattedString)

const address = '1126 Westminster Av';
const State =  "California"
const Town = 'La'
const value = util.format("Address: %s, State: %s, Town: %s", address ,State ,Town)

console.log(value)