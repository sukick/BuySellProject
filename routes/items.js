const express = require('express');
const router = express.Router();
const itemFunctions = require('../lib/items_queries');

router.use((req, res, next) => {
  // if (!req.cookies.user_id) {
  //   res.redirect('/login');
  // }

  console.log('inside the product router');

  next();
});

// GET /products/
router.get('/', (req, res) => {
  itemFunctions.getProducts()
    .then((items) => {
      res.json(items);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  itemFunctions.getProductById(req.params.id)
    .then((item) => {
      res.json(item);
    });
});

module.exports = router;