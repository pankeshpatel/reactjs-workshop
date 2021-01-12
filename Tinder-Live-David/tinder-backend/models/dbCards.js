const cardSchema  = new  mongoose.Schema({
    name : String,
    imgUrl : String
});

// We will create a collection
const Card  =  new mongoose.model("Card", cardSchema);

 