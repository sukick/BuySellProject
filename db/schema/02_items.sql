DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
   items_id SERIAL PRIMARY KEY NOT NULL,
   brand VARCHAR(255) NOT NULL,
   price INTEGER NOT NULL,
   product_number INTEGER NOT NULL,
   condition VARCHAR(255) NOT NULL,
   description TEXT NOT NULL,
   user_id INTEGER REFERENCES users (user_id)
);

-- product_no integer REFERENCES products (product_no)

