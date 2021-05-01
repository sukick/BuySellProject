DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone SMALLINT NOT NULL,
  admin BOOLEAN
);


CREATE TABLE items(
   id SERIAL PRIMARY KEY NOT NULL,
   name VARCHAR(255) NOT NULL,
   size INTEGER NOT NULL,
   color VARCHAR(255) NOT NULL,
   price INTEGER NOT NULL,
   type VARCHAR(255) NOT NULL,
   product_number INTEGER NOT NULL,
   description TEXT NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users(id),
   FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE favorties(
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);


CREATE TABLE categories(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
