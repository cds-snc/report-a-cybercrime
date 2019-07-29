const express = require("express");
const app = express();

app.use(express.urlencoded());

var path = require("path");

const port = 3030;

app.use(express.static("pages"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});

app.post("/submit", (req, res) => {
  const youBusiness = req.body.youBusiness;
  console.log({ youBusiness });
  res.send(JSON.stringify({ youBusiness }));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
