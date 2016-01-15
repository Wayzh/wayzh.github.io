// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
//		$('.panel-cover').backstretch([
//	 		 "http://wayzh.github.io/img/tm-bg-slide-3.jpg"
//	 			], 	{duration: 3200, fade: 500});
//		$('.panel-min-cover').backstretch([
//				"http://wayzh.github.io/img/tm-bg-slide-3.jpg"
//		], 	{duration: 3200, fade: 1300});
	
    	$(".panel-min-nav").hide();
    	$("#min-nav").click(function(){
    		$(".panel-min-nav").slideToggle(400);
    	});
    	
    });
	

	
});