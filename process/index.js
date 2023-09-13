/* The process object in Node.js is a global object that can be accessed inside any module without requiring it. There are very few global objects or properties provided in Node.js and process is one of them

*/

// console.log(process);
//process object conatins current node jsprocess details and give control over it
// console.log(process.argv);

// eg: npm install -g express
// are arguments on command line
// its an array and passes arguments

// we can pass command line arguments

//2 process obj has an on() where you can execute events relating to ongoing process.

// console.log("first line")
// process.on("beforeExit",()=>{
//     console.log("before exiting application")
// })
// console.log("second line")


// global module is global object
//as in browser window object
// //1-1
// console.log(global);
// console.log(module);

// // two variables globally available
// // __dirname
// console.log(__dirname)
// // __filename
// console.log(__filename)