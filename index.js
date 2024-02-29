require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose");
const bodyParser = require('body-parser');
const app =express();
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const path = require("path");
//const multer = require("multer");
const portRoute = require("./routes/portfolioRoutes");
//const authRoute = require("./routes/authuserRoute");
//const session = require('express-session');
//const JWT_SECRET = process.env.JWT_SECRET;




// Set up middleware and view engine
//app.use(session({ secret: JWT_SECRET, resave: true, saveUninitialized: true }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());



// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use("/myPortfolio",portRoute);


mongoose.connect(MONGO_CONNECTION)
.then(()=>{
    console.log("connnected to mongodb cloud");
    app.listen(8080,()=>{
        console.log('Node api is running on port 8080');
    });
})
.catch((error)=>{
    console.log(error);
});

