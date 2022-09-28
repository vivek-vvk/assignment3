const express = require('express');
const signupdata= require('./src/model/signupdata');
const booksdata=require('./src/model/booksdata');
const logindata=require('./src/model/logindata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt=require('jsonwebtoken');
var app = new express();
app.use(cors());


app.use(bodyparser.json());

email='vivekachu@gmail.com';
password='12345678';


app.post('/',function(req,res){
   
    console.log(req.body);
   
    var product = {       
        name: req.body.product.name,
       email: req.body.product.email,
        number : req.body.product.number,
         password: req.body.product.password
       
   }       
   var data= signupdata(product);
 data.save(product);
 signupdata.find().then(function (data){
    res.send(data);
 });
});




app.post('/login',(req,res)=>{
    console.log(req.body);
   
    var product = {       
       
        email: req.body.product.email,
        password: req.body.product.password
       
   }       
   var data= logindata(product);
 data.save(product);
 logindata.find().then(function (data){
    res.send(data);
 });
  


})





app.get('/books',function(req,res){
    
    booksdata.find()
                .then(function(bookcollection){
                    res.send(bookcollection);
                });
});


app.put('/edit',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
   
  name = req.body.name,
   genre= req.body.genre,
    writer = req.body.writer,
    description = req.body.description
   
    booksdata.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name,
                                "genre":genre,
                                "writer":writer,
                                "description":description
                               }})
   .then(function(){
       res.send();
   })
 });
 


 app.post('/add',function(req,res){
   
    console.log(req.body);
   
    var product = {       
        name: req.body.product.name,
        genre : req.body.product.genre,
        writer : req.body.product.writer,
        description: req.body.product.description
       
   }       
   var product = new booksdata(product);
   product.save();
});



app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    booksdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });




app.listen(3000, function(){
    console.log('listening to port 3000');
});
