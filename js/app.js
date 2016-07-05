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
        $( this ).css( "color", '.red');// add styling to X later
        $( this ).val('xx');
      } else if (o){//second player, aka O
        $( this ).css('color', '.blue');//add styling to O later
        $( this ).val('oo');
      }
      counter++;//add anoter to counter to keep control over turns
       if(($('.1').val()==='oo')&&($('.2').val()==='oo')&&($('.3').val()==='oo')||
          ($('.4').val()==='oo')&&($('.5').val()==='oo')&&($('.6').val()==='oo')||
          ($('.7').val()==='oo')&&($('.8').val()==='oo')&&($('.9').val()==='oo')||
          ($('.1').val()==='oo')&&($('.4').val()==='oo')&&($('.7').val()==='oo')||
          ($('.2').val()==='oo')&&($('.5').val()==='oo')&&($('.8').val()==='oo')||
          ($('.3').val()==='oo')&&($('.6').val()==='oo')&&($('.9').val()==='oo')||
          ($('.1').val()==='oo')&&($('.5').val()==='oo')&&($('.9').val()==='oo')||
          ($('.3').val()==='oo')&&($('.5').val()==='oo')&&($('.7').val()==='oo')){
          return alert('O wins');
        }
      else if(  ($('.1').val()==='xx')&&($('.2').val()==='xx')&&($('.3').val()==='xx')||
                ($('.4').val()==='xx')&&($('.5').val()==='xx')&&($('.6').val()==='xx')||
                ($('.7').val()==='xx')&&($('.8').val()==='xx')&&($('.9').val()==='xx')||
                ($('.1').val()==='xx')&&($('.4').val()==='xx')&&($('.7').val()==='xx')||
                ($('.2').val()==='xx')&&($('.5').val()==='xx')&&($('.8').val()==='xx')||
                ($('.3').val()==='xx')&&($('.6').val()==='xx')&&($('.9').val()==='xx')||
                ($('.1').val()==='xx')&&($('.5').val()==='xx')&&($('.9').val()==='xx')||
                ($('.3').val()==='xx')&&($('.5').val()==='xx')&&($('.7').val()==='xx')){
                  return alert('X wins');
                }
      else if(counter===9){
      return alert('Draw');
      }

      $('.reset').on("click", function handleClick(e){ // removes, values, and text
            $('.box').text("");
            $('.box').val("");
            // $('.box').css('background-color', "white");
            turnCounter = 0; 
          });


    }); //close function(event)

    //$( "button" ).on('click', function( reset ){

    //});


// var reset = $('button').on('click', function(){
// $('box:reset');

 });




 //close document
