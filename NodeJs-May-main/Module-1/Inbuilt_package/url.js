const url = require("url")

const urlString = "https://github.com/SangeethaShanmugm?tab=repositories"

const parsedUrl = url.parse(urlString, true) //parse the url into some components


console.log(parsedUrl.hostname)
console.log(parsedUrl.pathname)
console.log(parsedUrl.query)
console.log(parsedUrl.search)
