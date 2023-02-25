const mysql = require("mysql");
let db;
try {
  db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "quizshow",
  });
  db.query();
} catch (error) {
  console.log(error);
}

function query(sql, params) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) {
        throw err;
      }
      resolve(result);
    });
  });
}

module.exports = { query };
