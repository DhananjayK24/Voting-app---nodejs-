require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
connectDb();

const app = express();
const userRoutes = require("./routes/userRoutes");

const bodyparser = require("body-parser");
app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;

app.use('/user', userRoutes);

app.listen(PORT, ()=>{
    console.log("Hello! OP");
});