// //first one
// const fs = require("fs");
// const text =fs.readFileSync("notes.txt",'utf-8')
// console.log(text)

// this is the way to read a file
//core modules
//local modules our own 
// third party modules nom install express


//  second 
const fs = require("fs");
let text1 =fs.readFileSync("notes.txt",'utf-8')
text1=text1.replace("console","Ganesha is on the way")
console.log(text1);

// now to write in to a file we can use 
// console.log("creating a new file with name ")
// fs.writeFileSync("vakratunda.txt",text1)

//modules can be used in three ways 
// customized modules, built in modules, third party modules

// so JS in browser is different then JS in node
/*with browser we have access to DOM and Web API
but with node js we have access to modules which provide 
access to fs, OS.
*/