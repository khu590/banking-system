//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient

const app = express();

mongoose.connect("mongodb://localhost:27017/bankDB", { useNewUrlParser: true });

const customerSchema = new mongoose.Schema ({
  name: String,
  amount: Number
});



const Customer = mongoose.model("Customer", customerSchema);

const customer1 = new Customer ({
  name: "John",
  amount: 500
});

const customer2 = new Customer ({
  name: "Jane",
  amount: 500
});
const customer3 = new Customer ({
  name: "Khushi",
  amount: 500
});
const customer4 = new Customer ({
  name: "Emma",
  amount: 500
});

const defaultCustomers = [customer1, customer2, customer3, customer4];



Customer.insertMany(defaultCustomers, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("connected to db");
  }
});


// app.get("/customers", function(req, res){

//   Customer.find({}, function(err, customers){
//    console.log(customers.name);
//   });
  
//   res.render("customers");
// });








app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home");
})



app.get("/transactions", function(req, res){
  res.render("transactions");
})

app.get("/newuser", function(req, res){
  res.render("newuser");
})

app.get("/currentuser", function(req, res){
  res.render("currentuser");
})

app.get("/transfer", function(req, res){
  res.render("transfer");
})

app.get("/customers", function(req, res){
  res.render("customers")
})

// {amount: num}

const amount = [];

app.post("/customers", function(req, res){
  
  // const amount = Number(req.body.amount);

  console.log(req.body.amount);

  // res.send(amount + " rupees transfered successfully!!");
});



// API KEY- c4c15d873dcc982f0a674396cceb8e31-us5






app.listen(3000, function() {
  console.log("Server started on port 3000");
});




// newFunction();
// function newFunction() {
//   {
//     "_id"; 1.0,
//       "name"; "Jane doe",
//         "amount"; 500.0;
//   }
// }

