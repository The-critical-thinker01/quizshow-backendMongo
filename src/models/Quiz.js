const mongoose = require("../db/db");
const playerSchema = require('./Player').PlayerSchema;
const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },

    Number: { type: Number },
    
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Questions'
        }
    ],
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Players'
        }
    ]
});

// static method to login user
quizSchema.statics.play = async function (player, responses) {

};

const Quiz = mongoose.model("Quizs", quizSchema);

module.exports = Quiz;
