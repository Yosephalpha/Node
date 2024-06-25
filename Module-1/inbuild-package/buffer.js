const buffer1 = Buffer.from('123456789');
const buffer2 = Buffer.from('HELLO');

let result = buffer2.copy(buffer1,2)
let result1 = buffer1.copy(buffer2,3)
console.log(result)
console.log(buffer1.toString())
console.log(buffer2.toString())
console.log(result)
console.log(Buffer.concat([buffer1,buffer2]).toString())
console.log(Buffer.compare(buffer1,buffer2))
console.log(buffer1.equals(buffer2))