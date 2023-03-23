const Quiz = require("../models/Quiz");
const Question = require("../models/Question");
const Player = require("../models/Player");
const UserModel = require("../models/User")

const NewQuizz = async (req, res) => {
    const { name, id } = req.body; //destructuring de l'objet renvoyé par le front-end
    try {
        const user = await UserModel.findById(id);
        const quiz = await Quiz.create({
            name: name,
            Number: 0,
            questions: [],
            players: []
        })
        user.quizs.push(quiz);
        user.save();
        res.send(quiz);
    } catch (err) {
        res.status(400).send(err);
    }
};

const AddQuestion = async (req, res) => {
    const id = req.params._id;
    const { title, options, answer } = req.body;
    try {
        const question = await Question.create({ title, options, answer })
        const quiz = await Quiz.findById(id);

        quiz.questions.push(question);

        quiz.save();
        res.send({ questionId: question });
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
};

const NewPayer = async (req, res) => {
    const id = req.params._id;
    const { name } = req.body;
    try {
        const player = await Player.create({ name: name, answers: [], numberOfCorectAnswers: 0 })
        const quiz = await Quiz.findById(id);
        quiz.players.push(player)
        quiz.save();
        res.send(player);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
};

const AnswerAQuestion = async (req, res) => {
    const { playerId, questionId, answer } = req.body;
    try {
        const player = await Player.findById(playerId);
        const question = await Question.findById(questionId);

        if (question.answer === answer) {
            player.numberOfCorectAnswers++;
        }
        player.answers.push({
            question: questionId,
            answer: answer
        })
        player.save();
        res.send(player);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
};


const GetAllQuizz = async (req, res) => {
    try {
        const result = await Quiz.find();
        //result to send to the navigator
        res.send(result);
    } catch (err) {
        // console.log(err);

        res.status(400).send(err);
    }
};

const GetQuizz = async (req, res) => {
    const number = req.params.number; // les parametre pqsser par get sont dans req.param
    try {
        const result = await Quiz.findOne({ Number: number });
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
};

const GetQuizzById = async (req, res) => {
    const id = req.params._id; // les parametre pqsser par get sont dans req.param
    try {
        const result = await Quiz.findById(id).populate("questions players");
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
};


module.exports = { NewQuizz, AddQuestion, GetAllQuizz, GetQuizz, GetQuizzById, NewPayer, AnswerAQuestion };
