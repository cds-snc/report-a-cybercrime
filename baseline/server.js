var express = require("express");
var app = express();
var path = require("path");

const port = 3030;

app.use(express.static("pages"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
