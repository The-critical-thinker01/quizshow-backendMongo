const express = require("express");
const router = express.Router({ mergeParams: true });

const userController = require("../controllers/user.controller");

router.route("/").get(userController.GetAllUsers);
router.route("/clear").get(userController.DeleteAll);
router.route("/:_id").get(userController.GetUserById);

router.route("/adduser").post(userController.AddUser);

router.route("/login").post(userController.LoginUser);


module.exports = router; 
