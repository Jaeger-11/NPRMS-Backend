const mongoose = require('mongoose');

const PPASchema = new mongoose.Schema({
    state: {type:String, required: true},
    LGA: {type:String, required: true},
    station: {type:String, required:true},
    department: {
        type:String, 
        required: true,
        enum: ['Finance and Administration', 'Operations', 'Logistics and Supply', 'Criminal Investigation', 'Training', 'Research and Planning', 'Information and Communication Technology']
    },
    specialty: {type: String}
})

const ContactSchema = new mongoose.Schema({
    email: {type:String},
    phoneNumber: [string],
})

const Officer = new mongoose.Schema({
    NIN: { 
        type: String,
        required: true,
        minLength: 11,
        maxLength: 11,
        unique: true
    },
    forceNo: { 
        type: String, 
        required: true, 
        minLength: 6,
        maxLength: 7,
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
    DOB: { 
        type: Date, 
        required: true 
    },
    dateOfEmployment: { 
        type: Date, 
        required: true 
    },
    currentRank: { 
        type: String, 
        required: true,
        enum: ['Inspector General', 'Deputy Inspector General', 'Assistant Inspector General', 'Commissioner', 'Deputy Commissioner', 'Assistant Commissioner', 'Chief Superintendent', 'Superintendent', 'Deputy Superintendent', 'Assistant Superintendent', 'Inspector', 'Sergeant Major', 'Sergeant', 'Corporal', 'Constable']
    },
    stateOfAssignment: { 
        type: String, 
        required: true 
    },
    PPA: {type:PPASchema, required:true},
    achievements: { 
        type: [string]
    },
    contact: {type:ContactSchema, required:true}
}, {timestamps:true});


module.exports = mongoose.model('Officer', Officer);