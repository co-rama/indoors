const router = require('express').Router();
let trend = require('../controllers/trending_controller');

router.get('/trends', trend.getTrend);

module.exports = router;