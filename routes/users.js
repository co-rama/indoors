const router = require('express').Router();
const user = require('../controllers/users_controller');

router.get('/register', user.registerUser);
router.post('/', user.postUser);
router.get('/users', user.getAllUser);

module.exports = router;