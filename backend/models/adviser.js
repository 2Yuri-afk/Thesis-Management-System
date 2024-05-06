import { Schema, model } from "mongoose";

const AdviserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const AdviserModel = model("Adviser", AdviserSchema);

export default AdviserModel;
