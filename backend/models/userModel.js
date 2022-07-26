const {Schema, model}= require('../connection');
const schemaObject = new Schema({
    name: String,
    age: Number,
    email: String,
    mobile: Number,
    password: String,
})

module.exports = model('Users', schemaObject);