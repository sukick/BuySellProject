const { user } = require('./db');
const db = require('./db');

const getProducts = () => {
  return db.query('SELECT * FROM items;')
    .then((response) => {
      return response.rows;
    });
};

// const getProductsMinMax = (min, max) => {
//   return db.query('SELECT * FROM items WHERE price >= min and price <= max `,[id]  ;') //change to use $parmas
//     .then((response) => {
//       return response.rows;
//     });
// };

const getItemById = (id) => {
  return db.query(`SELECT * FROM items WHERE id = $1`, [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch(err => {
      return console.log("query error", err);
    })
};

// Post route to create items
const postItemById = (brand, price, product_number, condition, description, user_id) => {

    return db.query
    (`INSERT INTO items
    (brand,
      price,
      product_number,
      condition,
      description, user_id)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [brand, price, product_number, condition, description, user_id])
      .then((response) => {
        console.log(JSON.stringify(response));
        return response.rows[0];
      })
      .catch(err => {
        return console.log("query error", err);
      })
  };

// Post delete route
const deleteItemById = (itemId) => {

  return db.query
  (`DELETE FROM items
    WHERE items_id = $1`, [itemId])
    .then((response) => {
      console.log(JSON.stringify(response));
      return response.rows[0];
    })
    .catch(err => {
      return console.log("query error", err);
    })
};

module.exports = {
  getProducts,
  postItemById,
  getItemById,
  deleteItemById

};
