const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vivek:vvk123@cluster0.lww1kjp.mongodb.net/Book');
const Schema = mongoose.Schema;


var NewProductSchema = new Schema({
    name:String,
    email: String,
     number : Number,
    password : String
   
});

var signupdata = mongoose.model('signup', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports =signupdata;