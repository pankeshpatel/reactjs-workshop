const path = require('path');
const express = require("express");
const app = express();

// Tutorial # 4
const staticPath = path.join(__dirname, "../public");

// Built in middleware
app.use(express.static(staticPath));

// Tutorial #1, #2, #3

app.get("/", (req, res) => {
    res.send("hello from express");
});

app.get("/about", (req, res) => {
    res.send("hello from About page");
});

app.get("/contact", (req, res) => {
    res.send("hello from Contact page");
});

app.get("/temp", (req, res) => {
    // sending back a JSON 
    // res.send({
    //     id : 1,
    //     name: "Pankesh"
    // });

    // sending back JSON Array
       res.send([{
        id : 1,
        name: "Pankesh"
    },
    {
        id : 2,
        name: "Abhishek"
    }
]);

    //res.send("hello from Temp page");
});

app.listen(8000, '127.0.0.1', () => {
    console.log("Listening the server");
});
