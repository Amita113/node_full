// if we run file from cmd line then we can pass 
//arguments as well and extract them.

console.log(process.argv)

//node jsfilename add/remove filename.txt content

//to create a file we need fs module

const fs =require('fs')
const input = process.argv
fs.writeFileSync(input[3],input[4])

// // run command node filename add/remove data.txt "this is a fruit"

// //add or remove
// //node jsfilename add/remove filename.txt content
// const input1 = process.argv
// if(input1[2]=='add'){
//     fs.writeFileSync(input1[3],input1[4])
// }else if(input1[2]=='remove'){
//     fs.unlinkSync(input1[3])
// }else {
//     console.log("invalid input")
// }

//node fn add data.txt 

