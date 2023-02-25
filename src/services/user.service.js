const db = require("../db/db");

const GetAllUsers = async () => {
  const query = `SELECT * FROM users`;
  return await db.query(query);
};

const GetUser = async (id) => {
  const query = `SELECT * FROM users where id = ?`;
  return await db.query(query, [id]);
};

const AddUser = async (user) => {
  const { nom, prenom, image, email, password } = user;

  const query = `INSERT INTO users (nom,prenom,email,image,password) VALUES(?,?,?,?,?)`;
  return await db.query(query, [nom, prenom, email, image, password]);
};
module.exports = { AddUser, GetAllUsers, GetUser };
