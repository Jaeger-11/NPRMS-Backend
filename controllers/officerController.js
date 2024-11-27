const Officer = require('../models/Officer');
const Identity = require('../models/Identity');

const getAllOfficers = async (req, res) => {
    const officers = await Officer.find({}).select('_id NIN forceNo firstName lastName gender currentRank PPA.station contact.email contact.phoneNumber');
    if(officers) {

        const identities = await Identity.find({
            NIN: { $in : officers.map((officer) => officer.NIN) }
        })

        const officersIdentities = officers.map((officer) => {
            const identity = identities.find((identity) => identity.NIN === officer.NIN)
            
            return {
                officer,
                identity: identity ? {firstName:identity.firstName, lastName:identity.lastName, gender:identity.gender, phoneNumber:identity.phoneNumber, email:identity.personalMailAddress} : null
            }
        })
        res.status(200).json({ success: true, data:officersIdentities })
    } else res.status(400).json({success: false, data: "error occured"})
}

const getOfficer = async (req, res) => {
    const {id} = req.params
    try{
        const officer = await Officer.findOne({forceNo:id});
        if(officer){
            const identity = await Identity.findOne({NIN: officer.NIN});
            res.status(200).json({success:true, workInformation:officer, personalInformation:identity});
        } else res.status(400).json({success:false})
    } catch (err){
        res.status(400).json({success: false, err: err.message})
    }
}

const createOfficer = async (req, res) => {
    const {NIN, forceNo, dateOfEmployment, currentRank, PPA, achievements} = req.body
    const officer = await Officer.create(req.body);
    if(officer){
        res.status(201).json({success: true, data:officer});
    } else res.status(400).json({message:"Error Occured"});
}

const updateOfficer = async () => {

}


module.exports = {getAllOfficers, getOfficer, updateOfficer, createOfficer}