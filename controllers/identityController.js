const Identity = require('../models/Identity');
const fs = require('fs')
const datafile = require('../identityDataV2.json')

const createNewIdentity = async (req, res) => {
    try{
        // const identities = await Identity.insertMany(datafile);
        // res.status(200).json({success: true, identities});
    } catch (err) {
        console.log(err)
    }
}

const editIdentity = async () => {

}



module.exports = {createNewIdentity, editIdentity};