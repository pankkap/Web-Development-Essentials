var express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// creating an Server App
const app = express();

// configure Server
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));

// Database Connection
mongoose.connect("mongodb://localhost:27017/EdwardDB");

var db = mongoose.connection;
db.on("error", () => console.log("Error in connecting the DataBase"));
db.on("open", () => console.log("Database Connected"));

// Store the data

app.post("/sign_up", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var password = req.body.password;

  var data = {
    name: name,
    email: email,
    mobile: mobile,
    password: password,
  };

  db.collection("mooring").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record inserted Succeffully");
    return res.redirect("signup_success.html");
  });
});

app
  .get("/", (req, res) => {
    // res.send("Respnse from Server");
    res.redirect("index.html");
  })
  .listen(8000);
console.log("Server Started at port 8000");
