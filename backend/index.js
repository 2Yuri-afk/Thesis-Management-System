import cors from "cors";
import express, { json } from "express";
import { connect } from "mongoose";
import UserModel from "./models/user.js";

const app = express();
app.use(json());
app.use(cors());

connect("mongodb+srv://INNOGATE:INNOGATE@cluster0.ofiaajx.mongodb.net/User", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "User",
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Check if user with provided email already exists
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      // Create new user
      UserModel.create(req.body)
        .then((newUser) => res.json(newUser))
        .catch((err) => res.json(err));
    }
  });
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  // Find user by email
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      // Compare passwords
      if (user.password === password) {
        res.json({ message: "Success", user: user });
      } else {
        res.json({ message: "Wrong password" });
      }
    } else {
      res.json({ message: "No user found with that email" });
    }
  });
});

app.listen(3001, () => {
  console.log("Server listining on http://127.0.0.1:3001");
});
