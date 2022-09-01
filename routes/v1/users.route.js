const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controller");

router
     .route("/")
     .get(userController.getAllUser);

router
     .route("/:email")
     .put(userController.setUser);
     // .delete(userController.deleteUser);
  
router
     .route("/admin/:email")
     .get(userController.getUserAdmin)
     .put(userController.setUserAdmin);


module.exports = router;
