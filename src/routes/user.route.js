const express = require("express");
const router = express.Router({ mergeParams: true });

const userController = require("../controllers/user.controller");

router.route("/").get(userController.GetAllUsers);

router.route("/:email").get(userController.GetUser);

router.route("/adduser").post(userController.AddUser);

router.route("/login").post(userController.LoginUser);

module.exports = router;
