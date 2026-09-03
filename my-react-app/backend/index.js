require("dotenv").config();

const express = require("express");
const cors = require("cors")
const mongodb = require("./db");


const app = express();

mongodb();
app.use(cors())

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.listen(5000, () => {
  console.log("Express app running on port 5000");
});