var buffer1 = Buffer.from("123456789")
var buffer2 = Buffer.from("HELLO")

console.log(buffer1.toString())
console.log(buffer2.toString())

//123456789
//012345678
var result = buffer2.copy(buffer1, 2) //12HELLO789 => buffer2 is copied to buffer1 starting index 2 of buffer1
console.log(result)// 5 bytes => 3 byte => 6 char = 5 bytes => 10 char

console.log(Buffer.concat([buffer1, buffer2]).toString())
console.log(buffer1.equals(buffer2))


console.log(Buffer.compare(buffer1, buffer2))//(buffer1 => 12HELLO789) , (buffer2 => HELLO) => buffer1 is lesser than buffer2 => -1



const a = Buffer.from("1234567")
const b = Buffer.from("HELLO")

console.log(a.toString())
console.log(b.toString())

var output = b.copy(a, 2)//12345HE

console.log(output)