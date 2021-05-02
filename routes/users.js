const express = require('express');
const router = express.Router();
const userFunctions = require('../lib/users_queries');

const funcThatReturnsRouter = (db) => {
  // GET /posts
  router.get('/', (req, res) => {
    userFunctions.getUsers()
      .then((user) => {
        res.json(user);
        // res.render('posts', {posts: response.rows});
      });
  });

  // GET /posts/:id
  router.get('/:id', (req, res) => {
    userFunctions.getUserById(req.params.id)
      .then((user) => {
        res.send(user);
      });
  });

  return router;
};

module.exports = funcThatReturnsRouter;
