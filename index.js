const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const productRoutes = require("./routes/products");
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(express.json());

//DB Function called
dbConnect();

//use routes
app.use("/product", productRoutes);


// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

//No route
app.all("*", (req,res) => {
  res.send("No Route Found");
})

app.get("/", (req, res) => {
  res.send("Welcome to Trade Giant Website.");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
