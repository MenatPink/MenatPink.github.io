$( document ).ready(function(){
$( '.Click' ).click(function(){
  $('.signUpOverlay').fadeIn(400);
  });
$( '.signUpOverlay' ).click(function(){
$(this).css('display', 'none');
  });
});
