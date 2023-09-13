
var cp =  require("child_process");

//cp.exec("start chrome"); --1
// cp.exec("start chrome https://mamaearth.in/product-category/new-launches");

// used to integrate other and run them as child

//--2
const output = cp.execSync("node test.js" )
console.log("output" + output)