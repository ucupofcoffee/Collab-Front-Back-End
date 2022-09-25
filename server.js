require('dotenv').config() // load .env file

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')

app.use(cors())

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error)) // if there is an error, log it
db.once('open', () => console.log('Connected to Database')) // if there is no error, log that we are connected

app.use(express.json()) // allows us to parse JSON

const todosRouter = require('./routes/todos.js')
app.use('/todos', todosRouter) // use the todos router for all routes that start with /todos

app.listen(3000, () => console.log('Server running on port 3000')) // start the server on port 3000