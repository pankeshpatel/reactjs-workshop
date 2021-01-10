const fs = require("fs");

//create file Async function
// In Async function, there is a call back function
fs.writeFile('read.txt', "today is awesome day",
(err) => {
    console.log("file is created");
    console.log(err);
});

// We pass a CALL Back function as an argument - a call back
// that gets called when that task completes.
// The callback has an argument that tell you whether
// the operation completed successfully.
// Now we need to say what ro do when f.writeFile()
// has completed (even if it is nothing) and start checking
// for errors.

// Async function call to append the file content...
// fs.appendFile('read.txt', "append new file content", 
// (err) => {
//     console.log("Content is appended");
// });

fs.readFile('read.txt', "UTF-8", (err, data) => {
    console.log(data);
} )