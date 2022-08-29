const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const routes= require('./routes/products')

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(express.json());

//DB connection
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.behpwr6.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>{console.log(
  "MongoDB Connection -- Ready state is:",
  mongoose.connection.readyState
);});

(async () => {
     try {
       app.use('/', routes);
     } catch (error) {
          console.log(error);
     }
     
})().catch(console.dir);


// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}


app.get("/", (req, res) => {
  res.send("Welcome to Trade Giant Website.");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
