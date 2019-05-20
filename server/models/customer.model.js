let mongoose = require('mongoose')
const uri = "mongodb+srv://brianlau:brianlaulau@node-express-mongo-app-dr9in.gcp.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, {
    useNewUrlParser: true
})


let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        requires: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)