const express = require('express');
const router = express.Router();
const { getAllOfficers, getOfficer, updateOfficer } = require('../controllers/officerController')

router.get('/', getAllOfficers);
router.get('/:id', getOfficer);
router.patch('/:id', updateOfficer);

module.exports = router;
