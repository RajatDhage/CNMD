const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const app = require('./app');
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");


app.listen(proces.env.PORT, ()=>{
    console.log('Server is working on http://localhost:${process.env.PORT}');
});