const express = require('express');
const router = express.Router();
const historyController = require('../controller/historyController');

router.post('/', historyController.saveResponseToHistory);

router.get('/', historyController.getHistory);

module.exports = router;

