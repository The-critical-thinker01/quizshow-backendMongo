const express = require("express");
const router = express.Router({ mergeParams: true });

const questionController = require("../controllers/question.controller");

router.route("/").get(questionController.GetAllQuestions);

router.route("/:_id").get(questionController.GetQuestion);

router.route("/newQuestion").post(questionController.AddQuestion);


module.exports = router;
