const fs = require("fs");
const http = require("http");
const server = http.createServer();



// The following is method 1...
// server.on('request', (req, res) => {
//     fs.readFile('input.txt', (err, data) => {
//         if(err) return console.log(err);
//        res.end(data.toString());
//     });
// });

// Method 2
// Reading from stream
// Creating a readable stream
// handle stream events --> data, end and error

// server.on('request', (req, res) => {
//     // This would create read stream...
//     const rstream = fs.createReadStream("input.txt");

//     // this is "data" event
//     // "data" event is inbuilt event of nodejs
//     rstream.on('data', (chunkdata) => {
//         res.write(chunkdata);
//     });

//     // rstream on "end" event...
//     // "end" event is inbuilt event of nodejs
//     rstream.on('end', () => {
//         res.end();

//     });

//     // "error" event is inbuilt event of nodejs
//     rstream.on('error', (err) => {
//         res.end(err);
//     });
    
// });

// Method 3 - Stream Pipes
server.on('request', (req, res) => {
    // This would create read stream...
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
    
});




server.listen(8000, '127.0.0.1', () => {
    console.log("Sever is listening...");
});