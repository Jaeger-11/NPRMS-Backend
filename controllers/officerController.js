const Officer = require('../models/Officer');

const getAllOfficers = async (req, res) => {
    const officers = await Officer.find({}).select('_id NIN forceNo firstName lastName gender currentRank PPA.station contact.email contact.phoneNumber');
    if(officers) {
        // const { _id, NIN, forceNo, firstName, lastName, gender, currentRank, PPA, contact } = officers
        // data = {_id, NIN, forceNo, firstName, lastName, gender, currentRank, station:PPA.station, email:contact.email, phoneNumber: contact.phoneNumber};
        res.status(200).json({ success: true, data:officers })
    } else res.status(400).json({success: false, data: "error occured"})
}

const getOfficer = async () => {

}

const createOfficer = async (req, res) => {
    const {NIN, forceNo, dateOfEmployment, currentRank, PPA, achievements} = req.body
}

const updateOfficer = async () => {

}


module.exports = {getAllOfficers, getOfficer, updateOfficer}