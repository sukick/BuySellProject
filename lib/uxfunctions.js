$( document ).on('ready',function() {

  // $( ".fav" ).on('click', function() {
  //   $("a").toggle(
  //     function(){$("a").css({"color": "red"});},
  //     function(){$("a").css({"color": "blue"});
  //   });
  // });


  $(".fav").on('click', function() {

    $("a").toggle(
          function(){$("i").css({"color": "red lighten-2"});},
          function(){$("i").css({"color": "green"});
        });

        $(".blue").html('<i id="save" class="material-icons">check</i>');

  });


});



// Do this in your onclick handler function, use id selector preferably, i just used class here,

//
