/*
what are Events(signal) and Event Emiiter(generate)
In html doc button ---onclick --signal to run a funct
button -- generator
node js we donot have button so we Api call/ no button click


make an event and call

where you can create-,fire-, and listen for your events */
/*
ex-1 registering for the event to be fired only one time using once  

ex-2 create an event emitter instance and register a couple of callbacks

ex-3 Registering for the event with callback parameters
*/

//creating a class using module
const EventEmitter = require("events");

//object is created out of class
const event = new EventEmitter()

//addEventListener
event.on('sayMyName',()=>{
    console.log(" Your name is Aparajkar1")
})
event.on('sayMyName',()=>{
    console.log(" Your name is Aparajkar2")
})
event.on('sayMyName',()=>{
    console.log(" Your name is Aparajkar3")
})

//create your own event using emit()
// event.emit('sayMyName');

setImmediate(()=>{
 event.emit('sayMyName'); 
})



/*
The concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called. so , 

an emitter object basically has two main features:

emitting name events.
registering and unregistering listener functions
*/

//third 
// event.on('checkPage',(sc,msg)=>{
// console.log(`status code is ${sc} and the page is ${msg}`)
// })

// event.emit('checkPage',200,'ok')