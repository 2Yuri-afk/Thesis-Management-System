import { Schema, model } from 'mongoose';

const StudentSchema = new Schema({
    name : String,
    email: String,
    password: String
})

const StudentModel = model('Student', StudentSchema, 'Students');

export default StudentModel;