// Event Module
// node.js has a built-in module called ``event`
// Where you can create-, fire- and listen for- your own events

// Example 1 -  Registering for the event to be fired only one time using once
// Example 2 -- Create an event emitter instance and register a couple of callbacks
// Example 3 -- Registering for the event with callback parameters

// We create a class, name "EventEmitter"
// therefore, "(E)ventEmitter" is 
// capital, unlike const fs = require("fs");

const EventEmitter = require('events');

//We create an object, name event...
const event = new EventEmitter();


// Example 1 -  Registering for the event to be fired only one time using once
// Two step process
// Step 1 -> Register for an event using event.emit()
// Step 2 -> Perform some activity using event.on() 
// you can call multiple events 


// Step 2: On event "SayMyName", perform some task...
// In this case, the event will display 
// "Your name is Pankesh" message on console...
// event.on('SayMyName' , () => {
//     console.log("your name is Pankesh");
// });

// // Calling multiple events 
// event.on('SayMyName' , () => {
//     console.log("your name is Patel");
// });

// // calling multiple events
// event.on('SayMyName' , () => {
//     console.log("Hello World NodeJs event Module");
// });

// // Step 1: We emit "SayMyName" event
// event.emit('SayMyName');

// This is second event...
event.on("checkPage", (sc, msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});


event.emit("checkPage", 200, "ok");

