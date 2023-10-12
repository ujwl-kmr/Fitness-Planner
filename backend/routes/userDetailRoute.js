const express = require('express');
const router = express.Router();
const { saveUserDetails, getUserDetails, deleteUserDetails } = require('../controller/customPlanController');

router.post('/details', saveUserDetails);

router.get('/details', getUserDetails);

router.delete('/:user_id', deleteUserDetails);

module.exports = router;
