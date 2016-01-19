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
    	$(".panel-min-nav").on("click",".btn-nav",function(){
    		var cat = $(this).text();
    		$.ajax({
	    			type:"get",
	    			url:"posts.json",
	    			async:true,
	    			dataType:"json",
	    			success:function(data){
	    				console.log("test");
	    				var length = data.length - 1;
	    				$(".blog-body").html("");
	    				$(".blog-lists").html("");
	    				for(var i = 0 ; i < length ; i++){
	    					console.log(data[i]);
	    					if(data[i].category.toUpperCase() == cat.toUpperCase() ){
	    						var child = "<div  class='item'><div class='title'>" 
							    	+"<h3><i class='fa fa-tumblr-square'> <a href='"+data[i].url+"'>"+data[i].title
							    	+"</a></i></h3></div>"
									+"<div class='date'>"
									+ data[i].date 
									+" 于 </div>"
							    	+"<div class='category'>"+data[i].category+"</div></div>"
								$(".blog-body").append(child);
	    						$(".blog-lists").append(child);
	    					}
	    						
	    				}
	    			}
	    	});
	    
	 	});
    });
    
});