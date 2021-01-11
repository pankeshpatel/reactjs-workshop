const mongoose = require('mongoose');
const validator = require("validator");



// The following code would create a MongoDB connection to a local database
// and create a databse (e.g., mongoexp) if it does not exists

// It shows a message "Connection successful...", 
// If the connection between node and mongo is successful

// It shows an error, in case any error in the connection...

mongoose.connect("mongodb://localhost:27017/mongoexp", {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then( () => console.log("connection successful...."))
  .catch((err) => console.log(err));

// Schema
// A Mongoose schema defines the structure of the documents 
// default values, validators, etc.

const playlistSchema  = new  mongoose.Schema({
        name : { 
          type : String,
          required : true,
          lowercase: true
        },
        ctype : String,
        videos : Number,
        author : String,
        active: Boolean,
        date : {
            type: Date,
            default: Date.now
        }
});

// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema degines gthe structure of the document,
// default values, validators, etc. whereas a Mongose model
// provides an interface to the database for creating,
// querying, updating, deleting records, etc. 


// The following code will create a collection (or table in RDBMS), named "Playlist" 
const Playlist  =  new mongoose.model("Playlist", playlistSchema);

// Create a document (one row in RDBMS) and insert into the collection (or table in RDBMS)

// Method 1 - Sync Method to save the document into MongoDB
// const reactPlaylist = new Playlist({
//         name :  "ReactJS",
//         ctype : "Front End",
//         videos : 80,
//         author : "Thapa Technical",
//         active: true        
// });

// // insert into the database...
// reactPlaylist.save();



// The following code will create a document (one row in RDBMS) and 
// insert into the collection (or table in RDBMS) in Async manner

// Method 2 - Async method to save data into MongoDB
// const createDocument = async ()  => {
//     try {
//         const reactPlaylist = new Playlist({
//             name :  "ReactJS",
//             ctype : "Front End",
//             videos : 80,
//             author : "Thapa Technical",
//             active: true        
//         });     
//         const result = await reactPlaylist.save();
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

// createDocument();

// Metho3 -- how to save multiple records into MongoDB
const createDocument = async ()  => {
    try {
        const record1 = new Playlist({
            name :  "record1",
            ctype : "Front End",
            videos : 80,
            author : "Thapa Technical",
            active: true        
        });  
        
        const record2 = new Playlist({
            name :  "record2",
            ctype : "Front End",
            videos : 80,
            author : "Thapa Technical",
            active: true        
        });  

        const record3 = new Playlist({
            name :  "record3",
            ctype : "Front End",
            videos : 80,
            author : "Thapa Technical",
            active: true        
        }); 

        const result = await Playlist.insertMany([record1, record2, record3]);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

//createDocument();


// Reading data from database

const getDocument = async() => {
    try {    
        // get all records 
        //const result = await Playlist.find();
    
        // get records, whose ctype is "Front End"
        // const result = await Playlist.find({ctype: "Front End"})
        // .limit(2);

        // Comparision Operator
        // https://docs.mongodb.com/manual/reference/operator/query-comparison/
        const result = await Playlist.find({videos: {$gt : 50}})
        .limit(2);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
};

// Reading data from database - function call
//getDocument();

// update the document
const updateDocument = async (_id) => {

    try {
        const result = await Playlist.updateOne({_id }, {
        $set : {
            name : "record-updated"
        }
    });
    console.log(result)
    } catch (error) {
        console.log(error);
    }   
};

// //update operation
// updateDocument("5ffbea0146087b1fe2878c58");

const deleteDocument = async(_id) => {
    try {
       const result =  await Playlist.deleteOne({_id});
        
    } catch (error) {s
        console.log(error);
    }
};




// Delete the document
deleteDocument("5ffbea0146087b1fe2878c58");

