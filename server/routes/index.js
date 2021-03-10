const router = require('express').Router();
const mainController = require('../controllers');

router.get('/home', mainController.retrieveSimpleRateOfReturn);

module.exports = router;