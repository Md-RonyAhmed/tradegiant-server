const mongoose = require("mongoose");

const dbConnect = () => {
  //DB connection
  const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.behpwr6.mongodb.net/tradeGiant?retryWrites=true&w=majority`;
  mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(
        "MongoDB Connection -- Ready state is:",
        mongoose.connection.readyState
      );
    }
  );
};

module.exports = dbConnect;
