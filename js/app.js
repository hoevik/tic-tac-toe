$(document).ready(function() { //runs jquery when page is ready
  console.log( "ready!" ); //testin if jquery run, fired up ready to go

  var counter = 0;  //counter of clicks
  var x;
  var o;

    $( ".box" ).one( "click", function(event) {
      //event.preventDefault(); //prevents double clicking
      x = (counter%2===0);
      o =(counter%2===1);
      if (x){ //first player, aka X
        $( this ).css( "color", 'red');// add styling to X later
        $( this ).val('xx');
      } else if (o){//second player, aka O
        $( this ).css('color', 'blue');//add styling to O later
        $( this ).val('oo');
      }
      counter++;//add anoter to counter to keep control over turns

      if ($('.1').val()==='oo'&& $('.2').val()==='oo'&& $('.3').val()==='oo') {
        window.alert('o wins');
      } else if($('.1').val()==='xx'&& $('.2').val()==='xx'&& $('.3').val()==='xx'){
          window.alert('x wins');
      }

    });

});
