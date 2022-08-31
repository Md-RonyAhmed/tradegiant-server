const User = require("../models/users.model");

// Add normal user
module.exports.setUser = (req, res) => {
     const email = req.params.email;
     const user = req.body;
     const filter = { email: email };
     const options = { upsert: true };
     const updateDoc = {
       $set: user,
     };
     const result = User.findOneAndUpdate(filter, updateDoc, options);
     res.send({ result });
}


//GET all user at endpoint'/user'
module.exports.getAllUser = (req, res) => {
  User.find({})
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          data,
          message: "Success",
        });
      }
    });
};