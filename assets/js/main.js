 
 

(function($) {
"use strict";

/*-------------------------------------------
  js wow
--------------------------------------------- */
 new WOW().init();
/*-------------------------------------------
  js scrollup
--------------------------------------------- */
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 
/*-------------------------------------------
  jQuery MeanMenu
--------------------------------------------- */
jQuery(".main-menu").meanmenu();

// search box active
$('.search-area a').on('click', function () {
	$('.menu-right .search-area .search-form').toggleClass('active');
	return false;
});	
$('.menu-bar a').on('click', function () {
	$('.slide-menu-area').addClass('highlight');
	return false;
});	
$('.slide-menu-area .close').on('click', function () {
	$('.slide-menu-area').removeClass('highlight');
	return false;
});	
	
/*-------------------------------------------
    isotope activation 
--------------------------------------------- */
//=================
 
/*-------------------------------------------
testimonial-slide
--------------------------------------------- */
 
/*-------------------------------------------
testimonial-slide
--------------------------------------------- */
 
/*-------------------------------------------
Sticky Header
--------------------------------------------- */
$(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
	}
	
	
}); 

/*-------------------------------------------
Counter up activation
--------------------------------------------- */
 
/*-------------------------------------------
popup-youtube
--------------------------------------------- */
 
/*----- cart-plus-minus-button -----*/
 
/*-------------------------------------------
google map
--------------------------------------------- */
 


})(jQuery);