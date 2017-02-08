var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat

// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Evil"
// });

// //add to the db

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!")
//     } else{
//         console.log("WE JUST SAVED A CAT TO THE DB: ")
//         console.log(cat);
//     }
//});

//replace adding new cat & saving with "create"

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});
//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS....");
        console.log(cats);
    }
})
