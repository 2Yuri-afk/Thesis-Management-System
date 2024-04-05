import { Schema, model } from 'mongoose';

const ProfSchema = new Schema({
    name : String,
    email: String,
    password: String
})

const ProfModel = model('Professors', ProfSchema);

export default ProfModel;