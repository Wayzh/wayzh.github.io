$(document).ready(function(){

	var category = window.location.href.split("?")[1].split("=")[1];
	$("#category").text(category);
	$.ajax({
		type:"post",
		url:"posts.json",
		 dataType: "json",
		success:function(data){
			console.log(data);
		
		},
		error:function(a){
			console.log("false");
			console.log(a);
		}
	});
});