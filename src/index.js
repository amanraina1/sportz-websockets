import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey from express");
});

app.listen(port, () => {
  console.group("Server is running");
});
