// The http.createServer() method include request and response
// parameters.render
// The request object can be used to get information about the current 
// HTTP request e.g., url, request header, and data.

// The response object can be used to send a resonse for a current HTTP request

// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type.

const  http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("Root Page...");

    }else if(req.url == "/about"){
        res.end("About Page...");

    }else if(req.url == "/contact"){
        res.write("Contact Page....");
        res.end();
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/data/data.json`, 
        "utf-8", (err, data) => {
            console.log(data);
            //const objData = JSON.parse(data);
            res.writeHead(200, {"Content-type": "application/json" });
            res.write(data);
            res.end();
        });
    }
    else{
        // This suggest that there is an error... and content is of HTML type.
        res.writeHead(404, {"Content-type": "text/html"}); 
        res.end("<h1> Page does not exist... </h1>");
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server has started and listening to the server")
});