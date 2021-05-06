

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});

// let test = document.getElementById('mydiv').data.test;
let product = document.getElementById('hiddendata');

console.log(product);
