$( document ).ready(function() {
  $( ".burger" ).click(function() {
    $('nav ul').slideToggle().css('display','flex');
  });
});
