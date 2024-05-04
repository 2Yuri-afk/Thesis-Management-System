import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/user.js";
import AdminModel from "./models/admin.js"
import AdviserModel from "./models/adviser.js";
import StudentModel from "./models/student.js";
import TeacherModel from "./models/teacher.js"

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://INNOGATE:INNOGATE@cluster0.ofiaajx.mongodb.net/User", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "User",
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.json("Already registered");
    }

    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.json({ message: "No user found with that email" });
    }

    if (user.password !== password) {
      return res.json({ message: "Wrong password" });
    }

    res.json({ message: "Success", user: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({}, 'name email' );
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.put("/change-role/:userId", async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      console.error("User not found:", userId);
      return res.status(404).json({ error: "User not found" });
    }

    // Determine the target collection based on the role
    let targetCollection;
    switch (role) {
      case 'students':
        targetCollection = StudentModel;
        break;
      case 'teachers':
        targetCollection = TeacherModel;
        break;
      case 'admins':
        targetCollection = AdminModel;
        break;
      case 'advisers':
        targetCollection = AdviserModel;
        break;
      default:
        console.error("Invalid role:", role);
        return res.status(400).json({ error: "Invalid role" });
    }

    // Remove the user from the current collection
    await UserModel.findByIdAndDelete(userId);

    // Insert the user into the target collection
    await targetCollection.create(user.toObject());

    console.log("Role updated successfully:", user);
    return res.status(200).json({ message: "Role updated successfully", user });
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(500).json({ error: "Error updating role" });
  }
});



app.listen(3001, () => {
  console.log("Server listening on http://localhost:3001");
});
