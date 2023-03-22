const QuestionModel = require('../models/Question');
const QuizModel = require('../models/Quiz');


const AddQuestion = async (req, res) => {
    const { title, options, answer } = req.body;
    try {
        QuestionModel.create({ title, options, answer });
        res.send("Question cree avec succees");
    } catch (err) {
        res.status(400).send(err);
    }
};

const GetAllQuestions = async (req, res) => {
    try {
        const result = await QuestionModel.find();

        //result to send to the navigator
        res.send(result);
    } catch (err) {
        // console.log(err);

        res.status(400).send(err);
    }
};

const GetQuestion = async (req, res) => {
    const id = req.params._id; // les parametre pqsser par get sont dans req.param
    try {
        const result = await questionModel.findById(id);
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
};




module.exports = { GetAllQuestions, AddQuestion, GetQuestion };
