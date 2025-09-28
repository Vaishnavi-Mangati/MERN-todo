// importing modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
const UserModel = require('./Models/User')

// create express app
const app = express()
// enabling cors
app.use(cors())
// converting data to json format
app.use(express.json())


// // Checking db connection
mongoose.connect('mongodb://127.0.0.1:27017/todo')
.then(() => console.log('Database connected'))
.catch((err) => console.error('Database connection error:', err));


app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result=> res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const{id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// sending request to db
app.post('/add', (req, res) => {
    const task = req.body.task
    TodoModel.create({ task })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})



app.post('/register', (req, res) => {
UserModel.create(req.body)
.then(user => res.json(user))
.catch(err => err.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email: email})
    .then (user => {
        if (user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
    
})


app.get('/get', async (req, res) => {
  try {
    const todos = await TodoModel.find(); // fetch all todos from DB
    res.json(todos); // send back as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(3001, () => {
    console.log("Server is Running")
})