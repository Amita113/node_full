/*
what is OS module ? 

Operating system module
OS information, ram ,architeture host name project on OS ,

working windows , amc , ubuntu -- information
*/

const os =require('os')
console.log(os) //run and see
console.log(os.arch()) //archi
console.log(os.freemem())// ram free
console.log(os.freemem()/(1024*1024*1024))// convert to bytes
console.log(os.hostname())//host name on your computer
console.log(os.platform())//win32, mac os
console.log(os.userInfo()) // info




