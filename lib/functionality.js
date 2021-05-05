
const itemsArr = [
  {
  items_id: 1,
  brand: "Fender",
  price: 300,
  product_number: 13579,
  condition: "New",
  description: "Nice guitar",
  user_id: null
  },
  {
  items_id: 2,
  brand: "Yamaha",
  price: 500,
  product_number: 97531,
  condition: "New",
  description: "Great guitar",
  user_id: null
  },
  {
  items_id: 3,
  brand: "Gibson",
  price: 700,
  product_number: 35719,
  condition: "New",
  description: "Cool guitar",
  user_id: null
  },
  {
  items_id: 4,
  brand: "Yamaha",
  price: 7000,
  product_number: 13579,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 5,
  brand: "Yamaha",
  price: 9000,
  product_number: 13578,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 6,
  brand: "Yamaha",
  price: 10000,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 7,
  brand: "Yamaha",
  price: 11000,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 8,
  brand: "Yamaha",
  price: 11070,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 9,
  brand: "Yamaha",
  price: 11070,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 10,
  brand: "Yamaha",
  price: 11070,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 11,
  brand: "Yamaha",
  price: 11070,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 12,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 13,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 2
  },
  {
  items_id: 15,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: null
  },
  {
  items_id: 16,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 17,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 18,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 19,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 20,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 21,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 2
  },
  {
  items_id: 25,
  brand: "Yamaha",
  price: 11570,
  product_number: 13579,
  condition: "New",
  description: "Cool",
  user_id: 3
  },
  {
  items_id: 26,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 27,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 28,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 29,
  brand: "Yamaha",
  price: 11570,
  product_number: 13778,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 31,
  brand: "Yamaha",
  price: 11579,
  product_number: 13589,
  condition: "New",
  description: "Cool",
  user_id: 1
  },
  {
  items_id: 32,
  brand: "Yamaha",
  price: 7000,
  product_number: 13578,
  condition: "New",
  description: "Cool",
  user_id: 1
  }
  ];


  itemsArr.sort((a, b) => Number(a.price) - Number(b.price));
  console.log("ascending", itemsArr);

  itemsArr.sort((a, b) => Number(b.price) - Number(a.price));
  console.log("descending", itemsArr);


const createElement = function(obj) {

  const $item = $(`<div class="container">
      <div class="price">
        <h5 class="itemprice">${items.price}</h5>
      </div>
  </div>`);

  return $item;
};

const renderItems = function(items) {
  for (const element of items) {
    let $item = createItemElement(element);
    $('.####').prepend($item);
  }
};
