const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  app.render("index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening to 3000");
});
