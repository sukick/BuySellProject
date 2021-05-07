//FAVORITES

$(function() {

  $(".fav").on('click', function() {

    $( this ).toggleClass( 'purple darken-4' )

  });

  $('#image').on('change', function(param) {
    
    const imageURL = $( this ).val()
    if (imageURL.startsWith('http')) {
      $('#productImage').attr('src', imageURL)
    }
  })

});


//MINMAX


// $(function() {
//   let products = $( "#hiddendata" ).val();
//   //products = JSON.parse(products);
//   products = JSON.parse(JSON.stringify(products));
//   const min = $( "#min" ).val();
//   const max = $( "#max" ).val();
//   console.log(typeof products);
//   //const filtered =

//   $(".filter").on('click', function(event) {
//     event.preventDefault();
//     let min = 0
//     //  $(min).val();
//     let max = 1000
//     //$(max).val();

//     let data = [];


//   });

// });




