const fs = require("fs");

const express = require("express");

var datetime = new Date();
var fileName =
  datetime.toISOString().slice(0, 13) +
  "." +
  datetime.toISOString().slice(14, 16);

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`${port}`);
});

fs.writeFile(`${fileName}.txt`, datetime, (err) => { // create new text file by date-time
  if (err) throw err;
  console.log("The file has been saved!", fileName);
});

app.get(`/${fileName}`, (req, res) => { // create new API endpoint and send the data in the text file to api
  fs.readFile(`${fileName}.txt`, "utf8", (err, data) => { // read the text file
    if (err) throw err;
    res.send(data);
  });
});

app.get("/", (req, res) => { // create API endpoint and send files list in directory
  fs.readdir("./", (err, files) => { // to find list of files
    if (err) throw err;
    res.send(files);
  });
});
