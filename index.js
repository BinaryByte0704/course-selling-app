import express from "express";
const app = express();

const users = [];

app.get("/user");
app.listen(3000, (req, res) => {
  console.log("The app is running at port: 3000");
});
