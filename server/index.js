const express = require('express')
const ctrl = require('./ctrl/ctrl')
const middleware = require('./middleware/middleware')

const SERVER_PORT = 4060

const app = express()

app.use(express.json())

app.post('/api/string', middleware.checkValidString, ctrl.successfulStringMessage)

app.listen(SERVER_PORT, () => console.log(`server is running on port ${SERVER_PORT}`))