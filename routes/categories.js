const express = require('express');
const router = express.Router();
const categoryFunctions = require('../lib/categories_queries');

router.use((req, res, next) => {
  // if (!req.cookies.user_id) {
  //   res.redirect('/login');
  // }

  console.log('inside the product router');

  next();
});

// GET /products/
router.get('/', (req, res) => {
  categoryFunctions.getCategories()
    .then((items) => {
      res.json(items);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  categoryFunctions.getCategoryById(req.params.id)
    .then((item) => {
      res.json(item);
    });
});

module.exports = router;
