// The Timers module provides a way scheduling functions to be called later at a given time.

// The Timer object is a global object in Node.js, and it is not necessary to import it using the require keyword.

// var myInt = setInterval(function () {
//     console.log("Hello");
// }, 500);

// Method	Description
// clearImmediate()	Cancels an Immediate object
// clearInterval()	Cancels an Interval object
// clearTimeout()	Cancels a Timeout object
// ref()	Makes the Timeout object active. Will only have an effect if the Timeout.unref() method has been called to make the Timeout object inactive.
// setImmediate()	Executes a given function immediately.
// setInterval()	Executes a given function at every given milliseconds
// setTimeout()	Executes a given function after a given time (in milliseconds)
// unref()	Stops the Timeout object from remaining active.
//2
function myFunc(arg) {
    console.log(`arg was => ${arg}`);
  }
  
  console.log('before immediate');
  //3
  setImmediate((arg) => {
    console.log(`executing immediate: ${arg}`);
  }, 'so immediate');
  
  console.log('after immediate');
  setTimeout(myFunc, 1500, 'funky');

  //setImmediate() will execute code at the end of the current event loop cycle. This code will execute after any I/O operations in the current event loop and before any timers scheduled for the next event loop. This code execution could be thought of as happening "right after this", meaning any code following the setImmediate() function call will execute before the setImmediate() function argument.

// The first argument to setImmediate() will be the function to execute. Any subsequent arguments will be passed to the function when it is executed. Here's an example: