const mongoose = require("../db/db");

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    options: [{
        type: String
    }],

    answer: {
        type: String,
    }
});


const Question = mongoose.model("Questions", questionSchema);

module.exports =  Question ;
