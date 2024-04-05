import cors from 'cors';
import express, { json } from 'express';
import { connect } from 'mongoose';
import StudentModel from './models/student.js';
import ProfModel from './models/prof.js';


const app = express();
app.use(json());
app.use(cors());

connect('mongodb+srv://INNOGATE:INNOGATE@cluster0.ofiaajx.mongodb.net/User', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'User',
})


app.post('/register', (req, res)=>{

    const {email, password} = req.body;
    StudentModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            StudentModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    StudentModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});