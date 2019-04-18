$(document).ready(function(){
  $(window).scroll(function(){

var wScroll = $(this).scrollTop();

$('.backgroundSaleWrapper').css({
  'transform' : 'translate(0px , '+ (wScroll /10) +'%)'
    });
$('.parallaxButton').css({
  'transform' : 'translate(0px , '+ (wScroll /3) +'%)'
    });
$('.detail1, .detail4').css({
  'transform' : 'translate('+ -(wScroll/4) +'px, 0px)'
    });
$('.detail2, .detail3').css({
  'transform' : 'translate('+ (wScroll/4) +'px, 0px)'
    });

    if(wScroll > $('.container').offset().top - ($(window).height()/4)) {

      $('.col-xs-4').each(function(i){

        setTimeout(function(){
        $('.col-xs-4').eq(i).addClass('isShowing');
      }, 150 * (i+1));
      });

    };
    if(wScroll > $('.section3').offset().top - ($(window).height()/4)) {

      $('.col-xs-3').each(function(i){

        setTimeout(function(){
        $('.col-xs-3').eq(i).addClass('isShowing');
      }, 150 * (i+1));
      });
    };

    if(wScroll > $('body').height() / 3 ){
      $('.scrolltop').css( "opacity", "1" );
    }
    if (wScroll < $('body').height() / 3 ) {
      $('.scrolltop').css( "opacity", "0");
    }
$('.scrolltop').click(function(){
    $("html, body").animate({ scrollTop: "0px" }, 2000);
    });
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });



  });
});
