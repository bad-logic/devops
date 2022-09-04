import express from "express";

const app = express();

const port = process.env.port;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
