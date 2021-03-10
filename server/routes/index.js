const router = require('express').Router();
const mainController = require('../controllers');

router.get('/', mainController.retrieveSimpleRateOfReturn);

module.exports = router;