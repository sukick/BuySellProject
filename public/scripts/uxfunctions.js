//FAVORITES

$(function() {

  $(".fav").on('click', function() {

    $( this ).toggleClass( 'purple darken-4' )

  });

});


//MINMAX


$(function() {
  let products = $( "#hiddendata" ).val();
  //products = JSON.parse(products);
  products = JSON.parse(JSON.stringify(products));
  const min = $( "#min" ).val();
  const max = $( "#max" ).val();
  console.log(typeof products);
  //const filtered =

  $(".filter").on('click', function(event) {
    event.preventDefault();
    let min = 0
    //  $(min).val();
    let max = 1000
    //$(max).val();

    let data = [];


  });

});




