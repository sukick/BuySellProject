CREATE TABLE favorities(
  favourite_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT,
  item_id INT
);