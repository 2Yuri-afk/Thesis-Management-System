import { Schema, model } from "mongoose";

const AdminSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const AdminModel = model("Admin", AdminSchema);

export default AdminModel;
