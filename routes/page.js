const router = require('express').Router();
const page = require('../controllers/page_controller');
// REDIRECT home if hit some random page
router.get('/*', page.someRandomPageRedirect);


module.exports = router;
