import express from "express";
const app = express();

const users = [];

app.post("/login", (req, res) => {
  for (let user in users) {
    if (
      user.userId === req.body.userId &&
      user.password === req.body.password
    ) {
      console.log("Login Succesfull");
    } else {
      console.log("Incorrect password or userId");
    }
  }
});

app.post("/signUp", (req, res) => {
  if (users.find(req.body.userId)) {
    console.log("User already exists");
  }

  if (req.body.password.len < 8) {
    console.log("Password should at least be of 8 characters");
  }
  users.push({
    userId: req.body.userId,
    password: req.body.password,
  });
});

app.get("/courses", (req, res) => {
  res.json;
  ({
    message: "Course Endpoint",
  });
});
