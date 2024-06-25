var path = require("path")
var p = "https://github.com/SangeethaShanmugm?tab=repositories"

var dir = "A:/DA/E-batch/NodeJs-May/Module-1/Inbuilt_package/path.js"
console.log(path.dirname(p))
console.log(path.basename(p))

console.log(path.dirname(dir))
console.log(path.basename(dir))
console.log(path.extname(dir))
console.log(path.isAbsolute(dir))