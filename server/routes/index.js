const router = require('express').Router();
const { retrieveSimpleRateOfReturn, retrieveLogRateOfReturn, retrieveBeta } = require('../controllers');

router.get('/sreturn', retrieveSimpleRateOfReturn);
router.get('/lreturn', retrieveLogRateOfReturn);
router.get('/beta', retrieveBeta);

module.exports = router;