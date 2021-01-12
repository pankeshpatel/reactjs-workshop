import express from 'express';
import mongoose from 'mongoose';
//import Cors from 'Cors';


// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middleware
app.use(express.json());
//app.use(Cors());

// DB config - local MongoDB database...
mongoose.connect("mongodb://localhost:27017/tinder-app", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then( () => console.log("connection successful...."))
  .catch((err) => console.log(err));


// This would define schema of a table
const cardSchema  = new  mongoose.Schema({
    name : String,
    imgUrl : String
});

// We will create a collection
const Card  =  new mongoose.model("Card", cardSchema);

// This is to create a card 
app.post("/tinder/card", async(req, res) => {
    try{
        
        const card =  new Card(req.body);
        const createCard = await card.save();
        res.status(201).send(createCard);        
    }catch(e){
        res.status(500).send(e);
    }

});

// This is to reterieve a card
app.get("/tinder/card", async (req, res) => {
    try{
        console.log("Get request is received");
        const cardData = await Card.find();
        res.status(200).send(cardData);
    }catch(e){
        res.status(500).send(e);

    }
});


// Listener
app.listen(port, "127.0.0.1", () => {
    console.log(`server is listening at ${port}`);
});


