//FAVORITES

$(function() {

  $(".fav").on('click', function() {

    $( this ).toggleClass( 'purple darken-4' )

  });

});


//MINMAX


$(function() {
  let products = $( "#hiddendata" ).val();
  products = JSON.parse(products);
  const min = $( "#min" ).val();
  const max = $( "#max" ).val();
  console.log(products);
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




