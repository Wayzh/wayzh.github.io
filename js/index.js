
$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "http://wayzh.github.io/img/tm-bg-slide-1.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
});