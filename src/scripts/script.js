(function($){
   
   'use strict';
   
   $(document).ready(function(){
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