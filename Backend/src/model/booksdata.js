const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vivek:vvk123@cluster0.lww1kjp.mongodb.net/Book');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({

    name :String,
    genre: String,
    writer: String,
    description: String
   
});

var booksdata= mongoose.model('bookcollection', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports =booksdata;