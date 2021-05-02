const db = require('./db');

const getProducts = () => {
  return db.query('SELECT * FROM items;')
    .then((response) => {
      return response.rows;
    });
};

const getProductById = (id) => {
  return db.query(`SELECT * FROM items WHERE id = $1`, [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getProducts,
  getProductById
};