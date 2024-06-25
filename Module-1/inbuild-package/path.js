const path = require('path');
const p = "https://github.com/Yosephalpha/MyResume";

const dir = "C:/Users/Yoseph/OneDrive/Desktop/Angular_React_Node/Node/Module-1/inbuild-package/path.js"


console.log(path.dirname(p));
console.log(path.basename(p));
console.log(path.extname(dir))
console.log(path.extname(p))

console.log(path.dirname(dir))
console.log(path.basename(dir))
console.log(path.isAbsolute(dir))
console.log(path.isAbsolute(p))