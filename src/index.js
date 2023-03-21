const express = require("express");
const app = express();
const port = 5000;
var bodyparser = require("body-parser");

// parser application /x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

//parser application/json

app.use(bodyparser.json());

const router = require("./routes/index.route");
app.use("/api", router);

app.listen(port, () => {
  console.log("envoyé avec sucess !!!");
});
