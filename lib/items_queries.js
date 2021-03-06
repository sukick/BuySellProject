const { user } = require('./db');
const db = require('./db');

const getProducts = () => {
  return db.query('SELECT * FROM items;')
    .then((response) => {
      return response.rows;
    });
};

const getFilterProducts = (min, max) => {
  return db.query(`SELECT * FROM items WHERE price >= $1 and price <= $2;`, [min, max])
    .then((response) => {
      return response.rows;
    });
};
getFilterProducts(100, 550);

const getItemById = (id) => {
  return db.query(`SELECT * FROM items WHERE items_id = $1`, [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch(err => {
      return console.log("query error", err);
    })
};

// Post route to create items
const postItemById = (item) => {
  const {brand, price, product_number, condition, image, description, user_id} = item;
    return db.query
    (`INSERT INTO items
    (brand,
      price,
      product_number,
      condition,
      description,
      user_id,
      image)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [brand, price, product_number, condition, description, user_id, image])
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
  deleteItemById,
  getFilterProducts
};
