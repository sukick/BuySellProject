const db = require('./db');

const getCategories = () => {
  return db.query('SELECT * FROM categories;')
    .then((response) => {
      return response.rows;
    });
};

const getCategoryById = (id) => {
  return db.query(`SELECT * FROM categories WHERE id = $1`, [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getCategories,
  getCategoryById
};