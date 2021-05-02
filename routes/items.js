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

router.post('/', (req, res) => {
  //res.render("bla bla", {output: req.body});

  console.log("req body:", req.body);
  const item = {
    brand: req.body.brand,
    price: req.body.price,
    product_number: req.body.product_number,
    condition: req.body.condition,
    description: req.body.description
  };
  console.log("item:", item );
  itemFunctions.postItemById(item.brand, item.price, item.product_number, item.condition, item.description)
  .then((postedItem) => {
    res.send(postedItem);
  })
  .catch(err => {
    return console.log("query error", err);
  })
  // req.context.models.messages[id] = message;
});

// // POST property
// router.post('/properties', (req, res) => {
//   const userId = req.session.userId;
//   database.addProperty({...req.body, owner_id: userId})
//     .then(property => {
//       res.send(property);
//     })
// });

// //ADD property
// const addProperty = function(property) {
//   const queryString = `
//   INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms)
//   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
//   RETURNING *;
//   `;
//   const values = [property.owner_id, property.title, property.description, property.thumbnail_photo_url, property.cover_photo_url, property.cost_per_night, property.street, property.city, property.province, property.post_code, property.country, property.parking_spaces, property.number_of_bathrooms, property.number_of_bedrooms]

//   console.log("values", values)
//   return pool.query(queryString, values)
//     .then(res =>
//      res.rows[0]

//     )
//     .catch(err => {
//       return console.log("query error", err);
//     })
// }

module.exports = router;
