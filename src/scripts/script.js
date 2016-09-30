(function($){
   
   'use strict';
   
   $(document).ready(function(){

   	var nav = $('header');
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		if (scroll >=300){
			nav.removeClass('normal').addClass('efecto');
		}else{
			nav.removeClass('efecto').addClass('normal');
		}
	});
	/**distancia menu**/
    var distancia=$('header').offset();

    if (distancia.top > 0){
    	nav.removeClass('normal').addClass('efecto');
    }
	  $('.slider1').bxSlider({
	    slideWidth: 200,
	    minSlides: 2,
	    maxSlides: 3,
	    slideMargin: 10
	  });
	});
   $('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});
})(jQuery);