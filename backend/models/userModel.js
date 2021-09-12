const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name : {
        type : String,
        required: false
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;