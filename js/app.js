// A $( document ).ready() block.
$(document).ready(function() { //runs jquery when page is ready
  console.log( "ready!" ); //testin if jquery run, fired up ready to go

  var counter = 1; //counter of clicks
    $( ".box" ).one( "click", function(event) {
      event.preventDefault();
      if (counter%2===1){
        $( this ).css( "color", "red");
      } else if (counter%2===0){
        $( this ).css('color', 'blue');
      }
      counter++;

    });

});
