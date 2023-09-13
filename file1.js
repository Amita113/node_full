const fs = require('fs')
// global modules no need to import

console.log("its a global module")
 fs.writeFileSync("hello.txt","it is not a global module")

 // try to run first and then require
 // how to use a module and know how to create a file
 //writeFileSync(filename, what content to add)

 