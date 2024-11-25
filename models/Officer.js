const mongoose = require('mongoose');

const PPASchema = new mongoose.Schema({
    state: {type:String, required: true},
    LGA: {type:String, required: true},
    station: {type:String, required:true},
    department: {
        type: String, 
        required: true,
        enum: ['Finance and Administration', 'Operations', 'Logistics and Supply', 'Criminal Investigation', 'Training', 'Research and Planning', 'Information and Communication Technology']
    },
    specialty: {type: String}
})

// const ContactSchema = new mongoose.Schema({
//     email: {type:String},
//     phoneNumber: {
//         type:String,
//         minLength: 11,
//         maxLength: 11
//     },
// })

const Officer = new mongoose.Schema({
    NIN: { 
        type: String,
        required: true,
        ref: 'Identity',
        unique: true
    },
    forceNo: { 
        type: String, 
        required: true, 
        minLength: 6,
        maxLength: 7,
        unique: true
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
    PPA: {type:PPASchema, required:true},
    achievements: { 
        type: [String]
    },
    // contact: {type:ContactSchema, required:true}
}, {timestamps:true});


module.exports = mongoose.model('Officer', Officer);