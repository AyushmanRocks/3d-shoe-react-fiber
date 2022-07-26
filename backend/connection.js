const mongoose = require('mongoose');
const dbName="mytestdb";
const dbURL = `mongodb+srv://ayushman:ayushman2312@cluster1.e9kqv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

//asynchrounous function
//this function will return a promise
mongoose.connect(dbURL)
// .then((result) => {
//     console.log(result);
//     console.log("Connected to MongoDB");
// }).catch((err) => {
//     console.log(err);
// });


module.exports = mongoose;
