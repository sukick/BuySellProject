const express = require('express');
const router = express.Router();
const userFunctions = require('../lib/users_queries');
const itemFunctions = require('../lib/items_queries');

const funcThatReturnsRouter = (db) => {
  // GET
  router.get('/', (req, res) => {
    userFunctions.getUsers()
      .then((user) => {
        res.json(user);
      })
      .catch(err => {
        return console.log("query error", err);
      })
  });

  // GET /user:id
  router.get('/:id', (req, res) => {
    userFunctions.getUserById(req.params.id)
      .then((user) => {
        res.send(user);
      })
      .catch(err => {
        return console.log("query error", err);
      })
  });

  // GET /item:id
  router.get('/:id', (req, res) => {
    itemFunctions.getItemById(req.params.id)
      .then((item) => {
        res.send(item);
      })
        .catch(err => {
        return console.log("query error", err);
      })
  });
  return router;
};

module.exports = funcThatReturnsRouter;
