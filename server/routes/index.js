const router = require('express').Router();
const { retrieveSimpleRateOfReturn, retrieveLogRateOfReturn } = require('../controllers');

router.get('/sreturn', retrieveSimpleRateOfReturn);
router.get('/lreturn', retrieveLogRateOfReturn)

module.exports = router;