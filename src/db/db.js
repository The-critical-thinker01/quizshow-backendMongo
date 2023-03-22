const mongoose = require("mongoose");

const dbquiz = "mongodb+srv://rivaldes:rivaldes@cluster.oialsmt.mongodb.net/?retryWrites=true";
//const dbquiz = "mongodb://localhost:27017/quizshow";
mongoose.set("strictQuery", false);
mongoose.connect(dbquiz, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
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
