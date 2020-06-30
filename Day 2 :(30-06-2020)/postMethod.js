const fs = require("fs");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);
  fs.writeFile(`${req.body.fileName}.txt`, req.body.content, (err) => {
    if (err) throw err;
    console.log(`The file ${req.body.fileName} has been saved!`);
  });
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
