const mongoose = require("mongoose");

const dbquiz =
  "mongodb+srv://ronaldo:prisca@cluster0.1oilhce.mongodb.net/quizshow";

mongoose.set("strictQuery", false);
mongoose.connect(dbquiz, () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
// const mysql = require("mysql");
// let db;

// try {
//   db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "quizshow",
//   });
//   db.query();
// } catch (error) {
//   console.log(error);
// }

// function query(sql, params) {
//   return new Promise((resolve, reject) => {
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         throw err;
//       }
//       resolve(result);
//     });
//   });
// }

//module.exports = { dbquiz };
