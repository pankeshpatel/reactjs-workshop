// importing  fs module
const fs = require('fs');

// Create a file name "read.txt" 
// and write "hello world" in it.
fs.writeFileSync("read.txt", "Hello World");

// This will append new content to the existing file
fs.appendFileSync("read.txt", " Appending new data..")

// Read file content and assign it to variable
const buf_data = fs.readFileSync("read.txt");

// This would convert data to the original strint
const org_buff = buf_data.toString();

console.log(org_buff);

// this would rename the file...
fs.renameSync('read.txt', 'readwrite.txt');


// create a folder
//fs.mkdirSync("thapa");

// Create a file to a specific path
//fs.writeFileSync("thapa/bio.txt", "Hello World")

// read file in text format
//fs.readFileSync("thapa/bio.txt", "Hello World", "utf8")

// delete file
//fs.unlinkSync("thapa/myBio.txt");


// remove directory
//fs.rmdirSync("thapa");