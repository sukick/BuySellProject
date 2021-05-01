DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
   id SERIAL PRIMARY KEY NOT NULL,
   name VARCHAR(255) NOT NULL,
   size INTEGER NOT NULL,
   color VARCHAR(255) NOT NULL,
   price INTEGER NOT NULL,
   type VARCHAR(255) NOT NULL,
   product_number INTEGER NOT NULL,
   description TEXT NOT NULL
  -- FOREIGN KEY (user_id) REFERENCES users(id),
  -- FOREIGN KEY (category_id) REFERENCES categories(id)
);