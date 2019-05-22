let express = require('express')
let router = express.Router()

// QueryString => query proprety on the request object
// localhost:3000/person?name=thomas&age=20
router.get('/person', (req, res) => {
    if (req.query.name) {
        res.send(`You have requested a person ${req.query.name}`)
    }
    res.send('You have requested a person')
})

// Params property on the request object
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`)
})

// 500 Error Handlers
router.get('/error', (req, res) => {
    throw new Error('There is a error.')
})


module.exports = router