// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const morgan     = require('morgan');
const cookiesession = require('cookie-session');
const itemFunctions = require('./lib/items_queries');

// PG database client/connection setup
//const { Pool } = require('pg');
const db = require('./lib/db');
//const db = new Pool(dbParams);
//db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(cookiesession({ name: 'session', keys:['key1']}));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/categories');

// routes
app.use('/items', itemsRouter);
app.use('/categories', categoryRouter);
app.use('/users', usersRouter(db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get('/api/users', (req, res) => {


  res.send("STRUMMER");

})

app.get("/", (req, res) => {

  //let userData = '';

  itemFunctions.getProducts()
    .then((products) => {
      //userData = items;
      res.render("index", {products});
    })
    .catch(err => {
      return console.log("query error", err);
    })
});

app.get('/users', (req, res) => {

});

app.get("/post", (req, res) => {
  console.log("Trying to Posttttt!!!! GET");
  res.render("post");
});

app.get("/item/", (req, res) => {
  res.render("item");
});

app.get("/item_admin", (req, res) => {
  res.render("item_admin");
});

app.get('/testlogin/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
