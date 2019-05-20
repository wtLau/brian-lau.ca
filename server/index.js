let express = require('express')
let app = express()
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let path = require('path')
let bodyParser = require('body-parser')


// Parse JSON Strings
app.use(bodyParser.json())

// MiddleWare: Tell express to register this API
app.use((req, rest, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})
app.use(personRoute)
app.use(customerRoute)

//Using static HTML pages
app.use(express.static('public'))

// Middleware: 404- Resource not Found
app.use((req, res, next) => {
    res.status(404).send('You are lost!')
})

// Middleware: 500- Internal Server Error
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))