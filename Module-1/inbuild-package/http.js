const http = require('http')

//req => what we send to server
// response => what we get information from server 

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write("Hello Everyone")
    res.end()  
}).listen(5000)