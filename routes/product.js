const router = require('express').Router();
const product = require('../controllers/product_controller');

router.get('/product', product.getProduct);

module.exports = router;
