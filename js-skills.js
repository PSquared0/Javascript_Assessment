"use strict";


// PART 1: Finding the Button

$(document).ready(function() {
    $(".tricky-to-find").click(function(){
        alert("This is an ALERT!!");
    }); 
});


// PART 2: Down with cats?????

$('#kittenz-rule').on({
    'dblclick': function(){
    $('#kittenz-rule').attr('src','static/ruby_spock.jpg');
    }
});

// PART 3: Porcupine

//  $("#make-a-porcupine").click(function(){
//     $("#cute-porcupine-image").fadeIn( "slow", function();
// });

$( "#make-a-porcupine").click(function() {
  $( "#cute-porcupine-image" ).fadeIn(2000, function() {
    // Animation complete
  });
});  

