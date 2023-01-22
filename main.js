$(document).ready(() =>{
$(".hint-box").click(function() {
  $( ".hint" ).slideToggle(500);
});

$(".wrong-answer-one").click(function() {
   $( ".wrong-answer-one" ).fadeOut();
      $( ".frown").show();
});
$(".wrong-answer-two").click(function() {
  $( ".wrong-answer-two" ).fadeOut();
   $( ".frown").show();
});

$(".wrong-answer-three").click(function() {
  $( ".wrong-answer-three" ).fadeOut();
   $( ".frown").show();
});

$(".correct-answer").click(function() {
  $( ".correct-answer" ).fadeOut();
   $( ".frown").hide();
     $( ".smiley").show();
     $( ".wrong-answer-one" ).fadeOut();
     $( ".wrong-answer-two" ).fadeOut();
     $( ".wrong-answer-three" ).fadeOut();
});


});
