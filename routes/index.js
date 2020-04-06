const router = require('express').Router();
let index = require('../controllers/index_controller');

// Get to home page
router.get('/', index.getHome);

module.exports = router;