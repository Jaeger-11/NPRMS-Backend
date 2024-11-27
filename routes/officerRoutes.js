const express = require('express');
const router = express.Router();
const { getAllOfficers, getOfficer, updateOfficer, createOfficer } = require('../controllers/officerController')

router.get('/', getAllOfficers);
router.get('/:id', getOfficer);
router.patch('/:id', updateOfficer);
router.post('/', createOfficer);

module.exports = router;
