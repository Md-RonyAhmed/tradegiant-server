const User = require("../models/users.model");

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

//GET all user admin at endpoint'/user/admin'
module.exports.getUserAdmin = async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email: email });
  const isAdmin = user?.role === "admin";
  res.send({ admin: isAdmin });
};

// Add normal user
module.exports.setUser = async (req, res) => {
  const email = req.params.email;
  const user = req.body;
  const filter = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    $set: user,
  };
  const result = await User.updateOne(filter, updateDoc, options);
  res.send({ result });
};

// Add admin user
module.exports.setUserAdmin = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
   const updateDoc = {
     $set: { role: "admin" },
   };
  const result = await User.updateOne(filter, updateDoc);
  res.send(result );
};
