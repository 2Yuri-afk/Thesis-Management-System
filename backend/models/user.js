import { Schema, model } from "mongoose";

// Update UserModel schema
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['students', 'teachers', 'admins', 'advisers', 'users'], // Add 'users' to the enum list
    default: 'users' // Default role
  }
});


const UserModel = model("User", UserSchema);

export default UserModel;
