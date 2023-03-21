const express = require("express");
const router = express.Router({ mergeParams: true });

const userController = require("../controllers/user.controller");

router.route("/").get(userController.GetAllUsers);

router.route("/:id").get(userController.GetUser);

router.route("/adduser").post(userController.AddUser);

module.exports = router;
