const jwt = require("jsonwebtoken");
const userService = require("../models/User");
const ErrorHandler = require("../Utils/ErrorHandler");

const AddUser = async (req, res) => {
  const { email, password, nom, premon, image } = req.body; //destructuring de l'objet renvoyé par le front-end
  try {
    const result = await userService.create({
      email,
      password,
      nom,
      premon,
      image,
    });
    res.send("inseret avec succes");
  } catch (err) {
    // console.log(err);
    const er = ErrorHandler.handleErrors(err);
    res.status(400).send(er);
  }
};

const GetAllUsers = async (req, res) => {
  try {
    console.log("hjxhgfxhjfhxdh");
    const result = await userService.find();
    //result to send to the navigator
    res.send(result);
  } catch (err) {
    // console.log(err);
    const er = ErrorHandler.handleErrors(err);
    res.status(400).send(er);
  }
};

const GetUser = async (req, res) => {
  const email = req.params.email; // les parametre pqsser par get sont dans req.param
  try {
    const result = await userService.findOne({ email });
    res.send(result);
  } catch (err) {
    const er = ErrorHandler.handleErrors(err);
    res.status(400).send(er);
  }
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  });
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.login(email, password);
    const token = createToken(user._id);
    //res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, token: token });
  } catch (err) {
    const errors = ErrorHandler.handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = { GetAllUsers, GetUser, AddUser, LoginUser };
