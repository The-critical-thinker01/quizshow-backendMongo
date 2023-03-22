const quizController = require('../controllers/quiz.controller');
const Question = require("../models/Question")
const Quiz = require("../models/Quiz");
const questions = require('./DefaultQuestion.js')


const SeedBD = async () => {
    await Quiz.deleteMany({});
    await Question.deleteMany({});

    const quiz = {
        name: "Marvel Quizz",
        Number: 0,
        questions: [],
        players: []
    }

    const Quizid = await Quiz.create(quiz);

    questions.slice(0, 5).forEach(async (question) => {
        const questionId = await Question.create(question)
        const quizSchema = await Quiz.findById(Quizid);

        quizSchema.questions.push(questionId);
        quizSchema.save();
    })
}

module.exports = SeedBD;