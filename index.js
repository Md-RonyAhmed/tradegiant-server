const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnection");
const productRoutes = require("./routes/v1/products.route");
const cors = require("./middlewares/cors.middleware");

app.use(cors.cors);
app.options("*", cors.cors);
app.use(express.json());

//DB Function called
dbConnect();

//use routes
app.use("/api/v1/product", productRoutes);


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
