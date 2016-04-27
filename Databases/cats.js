var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the database

var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat) {
    if (err) {
        console.log("SOMETHING WENT WRONG");
    }
    else {
        console.log("WE JUST SAVED A CAT TO THE DB");
        console.log(cat);
    }
});

Cat.create({
    name: "Snow White",
    age: 10,
    temperament: "Nice"
}, function(err, cat) {
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});

// retrieve all cats from the database, console.log each one

Cat.find({}, function(err, cats) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(cats);
    }
});