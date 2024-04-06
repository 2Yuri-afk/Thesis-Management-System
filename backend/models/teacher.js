import { Schema, model } from "mongoose";

const TeacherSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const TeacherModel = model("Teacher", TeacherSchema);

export default TeacherModel;
