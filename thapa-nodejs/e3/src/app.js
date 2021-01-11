const express = require("express");

// This would include the conn.js 
//require("../db/conn");

require("../db/conn");
const Student = require("../models/students");
const studentRouter = require("../routers/student");

const app = express();
const port = process.env.PORT || 4000;

// express.json() is a method inbuilt in express
// to recognize the incoming reuest object as a JSON object
// This method is called as a middleware in your application
// using the code app.use(express.json())

app.use(express.json());
app.use(studentRouter);





app.listen(port, "127.0.0.1", () => {
    console.log(`server is listening at ${port}`);
});