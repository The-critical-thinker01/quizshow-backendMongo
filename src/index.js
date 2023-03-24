const express = require("express");
const app = express();
const port = 5000;
var bodyparser = require("body-parser");

var cors = require("cors");
app.use(cors());
// parser application /x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

//parser application/json

app.use(bodyparser.json());

const router = require("./routes/index.route");
app.use("/api", router);

app.use("/", (req, res) => {
  res.send("welcom to quizshow Api");
});
// const SeedBD = require('./Seeder/QuestionSeeder');

// SeedBD().then(()=>{
//   console.log("seed succesful")
// })

app.listen(port, () => {
  console.log("envoyé avec sucess !!!");
});
