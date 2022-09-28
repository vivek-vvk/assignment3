const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vivek:vvk123@cluster0.lww1kjp.mongodb.net/Book');
const Schema = mongoose.Schema;


var NewProductSchema = new Schema({
    
    email: String,
     
    password : String
   
});

var logindata = mongoose.model('login', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports =logindata;