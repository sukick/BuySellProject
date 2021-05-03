DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone TEXT NOT NULL,
  admin BOOLEAN
);


--CREATE TABLE favorties(
  --FOREIGN KEY (user_id) REFERENCES users(id),
  --FOREIGN KEY (item_id) REFERENCES items(id)
--);
