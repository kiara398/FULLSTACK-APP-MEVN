//Dependecies
const express = require('express'); 
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// const registerRoute = require("./routes/registerRoute");

//instatiate the express library and assign it to var app
const app = express(); //(2. instatiations)
const port = process.env.PORT || 5000;


//mongodb connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
.then(()=> console.log("Connected to the database!"))
.catch((err) => console.log(err));


// (4. middleware)
//body-parser handles reading data from the form element
app.use(express.urlencoded({extended: true})) 
app.use(cors())
app.use(express.json())
// app.use(express.static("uploads"));
app.use(express.static(path.join(__dirname, 'uploads')));




  //routes
  app.use("/api/post", require("./routes/routes"));

  // handling non existing routes
app.get('*', (req, res)=> {
  res.status(404).send('OOPS! WRONG ADDRESS')
})


  // this helps create a server defining the port, console.log will run whenever you listen to the port
   app.listen(port, () =>{
      console.log(`listening on http://localhost:${port}`)
    })