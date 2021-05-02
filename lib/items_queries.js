const db = require('./db');

const getProducts = () => {
  return db.query('SELECT * FROM items;')
    .then((response) => {
      return response.rows;
    });
};

// const getProductById = (id) => {
//   return db.query(`SELECT * FROM items WHERE id = $1`, [id])
//     .then((response) => {
//       return response.rows[0];
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

const postItemById = (brand, price, product_number, condition, description) => {
    console.log({brand, price, product_number, condition, description});
    return db.query
    (`INSERT INTO items
    (brand,
      price,
      product_number,
      condition,
      description)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`, [brand, price, product_number, condition, description])
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
  getItemById
};
