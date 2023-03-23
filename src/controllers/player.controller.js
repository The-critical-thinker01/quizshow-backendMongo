const PlayerModel = require('../models/Player');


const GetPlayer = async (req, res) => {
    const id = req.params._id; // les parametre pqsser par get sont dans req.param
    try {
        const result = await PlayerModel.findById(id).populate({
            path: "answers",
            populate: {
                path: "question"
            }
        })
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
};

const RetryPlay = async (req, res) => {
    const id = req.params._id; // les parametre pqsser par get sont dans req.param
    try {
        const result = await PlayerModel.findById(id);
        result.answers = [];
        result.numberOfCorectAnswers = 0;
        result.save();
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
};

const GetPlayers = async (req, res) => {
    try {
        const result = await PlayerModel.find();
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
};


module.exports = { GetPlayer, GetPlayers, RetryPlay };
