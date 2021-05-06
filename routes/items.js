const express = require('express');
const router = express.Router();
const itemFunctions = require('../lib/items_queries');

// router.use((req, res, next) => {
//   // if (!req.cookies.user_id) {
//   //   res.redirect('/login');
//   // }

  

//   next();
// });

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

router.post('/filter', (req, res) => {
  const min = req.body.min;
  const max = req.body.max;
  if (!min || !max) {
    return res.send("Please provide a min and max price");
  }
  itemFunctions.getFilterProducts(min, max)
    .then((items) => {
      // res.json(items);
      res.render("index", {products: items});
    })
    .catch(err => {
      return console.log("query error", err);
    })
});

// GET /products/:id
router.get('/:id', (req, res) => {
  itemFunctions.getItemById(req.params.id)
    .then((item) => {
      console.log("ITEM______", item);
      res.render("item", {item: item});
    })
    .catch(err => {
      return console.log("query error", err);
    })
});

// POST /create items
router.post('/post', (req, res) => {
  console.log("trying to sell!!!")
  console.log("req.body_________", req.body);
  const item = {
    brand: req.body.brand,
    price: req.body.price,
    product_number: req.body.productnumber,
    condition: req.body.condition,
    description: req.body.description,
    user_id: req.session.user_id
  };
  itemFunctions.postItemById(item.brand, item.price, item.product_number, item.condition, item.description, item.user_id)
  .then((postedItem) => {
    
    res.redirect("/items/" + postedItem.id);
  })
  .catch(err => {
    return console.log("query error", err);
  })
});

//POST delete items
router.post('/:item_id', (req, res, next) => {
  const itemId = req.params.item_id;

  itemFunctions.deleteItemById(itemId)
  .then((postedItem) => {
    res.send(postedItem);
  })
  .catch(err => {
    return console.log("query error", err);
  })
});

//itemFunctions.deleteItemById(300); //testing the by calling the function
module.exports = router;
