const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const quizRoute = require("./quiz.route");
const questionROute = require("./questions.route");
const playerroute =  require("./player.route")

router.use("/users", userRoute);
router.use("/quizs",quizRoute)
router.use("/questions",questionROute)
router.use("/players",playerroute)

module.exports = router;
