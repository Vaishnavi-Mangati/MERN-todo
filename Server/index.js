// importing modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

// create express app
const app = express()
// enabling cors
app.use(cors())
// converting data to json format
app.use(express.json())


// Checking db connection
mongoose.connect('mongodb://127.0.0.1:27017/todo')
.then(() => console.log('Database connected'))
.catch((err) => console.error('Database connection error:', err));


app.get('/get', (req, res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

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


app.listen(3001, () => {
    console.log("Server is Running")
})