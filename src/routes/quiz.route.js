const express = require("express");
const router = express.Router({ mergeParams: true });

const quizController = require("../controllers/quiz.controller");

router.route("/").get(quizController.GetAllQuizz);

router.route("/:number").get(quizController.GetQuizz);
router.route("/getquizByid/:_id").get(quizController.GetQuizzById);
router.route("/newQuiz").post(quizController.NewQuizz);
router.route("/newPalyer/:_id").post(quizController.NewPayer);
router.route("/answer").post(quizController.AnswerAQuestion);

router.route("/addquestion/:_id").post(quizController.AddQuestion);

module.exports = router;
