const userService = require("../services/user.service");

const AddUser = async (req, res) => {
  try {
    const result = await userService.AddUser(req.body);
    res.send("inseret avec succes");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
const GetAllUsers = async (req, res) => {
  try {
    const result = await userService.GetAllUsers();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const GetUser = async (req, res) => {
  try {
    const result = await userService.GetUser(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports = { GetAllUsers, GetUser, AddUser };
