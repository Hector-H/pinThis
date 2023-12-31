// Modules and Globals
require('dotenv').config()
const express = require('express')
const userRouter = require('./controllers/users')
const pinRouter = require('./controllers/pins')
const postRouter = require('./controllers/posts')
const authenticate = require('./middleware/auth')

const app = express()

app.use(express.json())

// Middleware
app.use(authenticate)


// Controllers & Routes
app.use('/users', userRouter)
app.use('/posts', postRouter)
/* app.use('/pins', pinRouter); */

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Internal Server Error' })
});

app.listen(process.env.PORT)