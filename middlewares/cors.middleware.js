const cors = require("cors");

const corsConfig = {
  origin: true,
  credentials: true,
};

module.exports.cors = () => {
  cors(corsConfig());
};
