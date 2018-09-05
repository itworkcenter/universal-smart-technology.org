const mongoose  = require("mongoose");
const Schema = mongoose.Schema;


//Create Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    midName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    level: {
        type: Number,
        required: false
    }
});

module.exports = Item = mongoose.model("user", UserSchema);