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
    })
    .catch(err => {
      return console.log("query error", err);
    })
});

// GET /products/:id
router.get('/:id', (req, res) => {
  itemFunctions.getProductById(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch(err => {
      return console.log("query error", err);
    })
});

// Post route to create items
router.post('/', (req, res) => {

  console.log("req boduusers:", req.body.users);
  console.log("req params:", req.params);
  console.log("req body:", req.body);
  console.log("req session:", req.session);
  const item = {
    brand: req.body.brand,
    price: req.body.price,
    product_number: req.body.product_number,
    condition: req.body.condition,
    description: req.body.description,
    user_id: req.session.user_id
  };

  itemFunctions.postItemById(item.brand, item.price, item.product_number, item.condition, item.description, item.user_id)
  .then((postedItem) => {
    res.send(postedItem);
  })
  .catch(err => {
    return console.log("query error", err);
  })

  //DELETE ITEM
  // router.post('/:id', (req, res, next) => {

  //   const item = {
  //     brand: req.body.brand,
  //     price: req.body.price,
  //     product_number: req.body.product_number,
  //     condition: req.body.condition,
  //     description: req.body.description,
  //     user_id: req.session.user_id
  //   };

  //   itemFunctions.postItemById(item.brand, item.price, item.product_number, item.condition, item.description, item.user_id)
  //   .then((postedItem) => {
  //     res.send(postedItem);
  //   })
  //   .catch(err => {
  //     return console.log("query error", err);
  //   })

  });
// });


module.exports = router;
