const { createNewIdentity, editIdentity } = require('../controllers/identityController');
const express = require('express')
const router = express.Router();

router.post('/new', createNewIdentity);
router.patch('/edit', editIdentity);


module.exports = router;