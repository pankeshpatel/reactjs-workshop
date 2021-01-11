const express = require("express");
const router = new express.Router();
const Student = require("../models/students");



// create a new student
router.get("/", (req, res) => {
    res.send("Server is listening...");
    res.end();
});

// To create a record - syncronous
// app.post("/students", (req, res) => {
    
//     const user =  new Student(req.body);
//     user.save().then( () => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
// });

// asyncronous 
router.post("/students", async(req, res) => {
    try{
         const user =  new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }

});

router.get("/students", async (req, res) => {
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }catch(e){
        console.log(e);
    }
});

// Get individual data using id

router.get("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }

        //res.send(studentData);

    }catch(e){
        console.log(e);
    }
});

router.patch("/students/:id", async(req, res) => {
    try {
        const _id  = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateStudents);        
    } catch (error) {
        res.status(400).send(e);
    }
});

// Delete request
router.delete("/students/:id", async(req, res) => {
    try {
        const _id  = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        res.send(deleteStudent);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;