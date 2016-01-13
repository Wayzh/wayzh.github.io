$(document).ready(function(){

	var category = window.location.href.split("?")[1].split("=")[1];
	$("#category").text(category);
	$.ajax({
		type:"get",
		url:"posts.json",
		dataType: "json",
		success:function(data){
			console.log(data);
			var posts = [];
			for()
		},
		error:function(a){
			console.log("false");

		}
	});
	
});