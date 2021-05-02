const express = require('express');
const router = express.Router();
const userFunctions = require('../lib/users_queries');

const funcThatReturnsRouter = (db) => {
  // GET /posts
  router.get('/', (req, res) => {
    userFunctions.getUsers()
      .then((response) => {
        res.json(response.rows);
        // res.render('posts', {posts: response.rows});
      });
  });

  // GET /posts/:id
  router.get('/:id', (req, res) => {
    userFunctions.getUserById()
      .then((response) => {
        res.send(response.rows[0]);
      });
  });

  return router;
};

module.exports = funcThatReturnsRouter;