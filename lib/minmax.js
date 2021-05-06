
const getAllProperties = (options, limit = 9) => {
  // 1 Setup an array to hold any parameters that may be available for the query.
  const queryParams = [];
  // 2 Start the query with all information that comes before the WHERE clause.
  let queryString = `
  SELECT * FROM items`;



if (min && max) {
  queryParams.push(min * 100, max * 100);
  if (queryParams.length === 2) {
    queryString += `WHERE price >= $${queryParams.length - 1} AND price <= $${queryParams.length}`;
  } else {
    queryString += `AND price >= $${queryParams.length - 1} AND price <= $${queryParams.length}`;
  }
}
};



// LightBnB example
// const getAllProperties = (options, limit = 10) => {
//   // 1 Setup an array to hold any parameters that may be available for the query.
//   const queryParams = [];
//   // 2 Start the query with all information that comes before the WHERE clause.
//   let queryString = `
//   SELECT properties.*, avg(property_reviews.rating) as average_rating
//   FROM properties
//   JOIN property_reviews ON properties.id = property_id
//   `;

// if (options.city) {
//   queryParams.push(`%${options.city}%`);
//   queryString += `WHERE city LIKE $${queryParams.length} `;
// }
// if (options.owner_id) {
//   queryParams.push(options.owner_id);
//   if (queryParams.length === 1){
//     queryString += `WHERE owner_id = $${queryParams.length}`;
//   } else {
//     queryString += `AND owner_id = $${queryParams.length}`;
//   }
// }
// if (options.minimum_price_per_night && options.maximum_price_per_night) {
//   queryParams.push(options.minimum_price_per_night * 100, options.maximum_price_per_night * 100);
//   if (queryParams.length === 2) {
//     queryString += `WHERE cost_per_night >= $${queryParams.length - 1} AND cost_per_night <= $${queryParams.length}`;
//   } else {
//     queryString += `AND cost_per_night >= $${queryParams.length - 1} AND cost_per_night <= $${queryParams.length}`;
//   }
// }
