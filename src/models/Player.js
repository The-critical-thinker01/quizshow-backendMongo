const mongoose = require("../db/db");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    answers: [
        {
            question: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Questions'
            },
            answer: {
                type: String,
            },

        }
    ],

    numberOfCorectAnswers: {
        type: Number
    }
});


const Player = mongoose.model("Players", PlayerSchema);

module.exports = Player ;
