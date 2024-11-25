const mongoose = require('mongoose');

const IdentitySchema = new mongoose.Schema({
    NIN: {
        type: String,
        required: true,
        minLength: 11,
        maxLength: 11,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    middleName: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    state: {
        type: String,
        required: true,
    },
    LGA: {
        type: String,
        required: true,
    },
    height: {
        type: String
    },
    eyeColor:{
        type: String
    },
    hairColor:{
        type: String
    },
    personalMailAddress:{
        type: String
    },
    phoneNumber: {
        type: String
    },
    DOB: {
        type: Date,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model('Identity', IdentitySchema);