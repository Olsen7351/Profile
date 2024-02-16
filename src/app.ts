import express from "express";
const app = express();
const port = 3000;

//Index page (static HTML)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/pages/index.html");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
