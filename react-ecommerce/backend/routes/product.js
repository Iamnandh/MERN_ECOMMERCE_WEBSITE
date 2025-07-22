const { getproducts, getsingleproduct } = require("../controllers/ProductController");

const express = require('express');
const router = express.Router();
router.route('/products').get(getproducts);
router.route('/products/:id').get(getsingleproduct);

module.exports = router;