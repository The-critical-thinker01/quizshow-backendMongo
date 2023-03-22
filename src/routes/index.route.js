const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const quizRoute = require("./quiz.route");
const questionROute = require("./questions.route");

router.use("/users", userRoute);
router.use("/quizs",quizRoute)
router.use("/questions",questionROute)

module.exports = router;
