const url = require('url')

const urlString ="https://learning.edureka.co/classroom/recording/1905/16601/1896941?tab=ClassRecording";

const parsedUrl = url.parse(urlString, true)

console.log(parsedUrl.hostname)
console.log(parsedUrl.pathname)
console.log(parsedUrl.query)
console.log(parsedUrl.search)