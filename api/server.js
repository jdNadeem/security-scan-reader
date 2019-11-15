const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser")
    cors = require('cors');;

app.use(cors());

const Scan = require("./models/model"),
    routes = require("./routes/routes");

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mongo:27017/securityScanDB", { useNewUrlParser: true, useUnifiedTopology: true }, (err,db) => {
  if(err) {
    console.log("Error In Connecting with DB");
  } else {
    console.log("Connected with DB");
  }
});

// Setting bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// Registering the route
routes(app);

// Starting Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});