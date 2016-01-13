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
			var size = data.length-1;
			var i = 0;
			for( i = 0 ; i < size ;  i++ ){
				
				if(data[i].category == category){
					var child = "<small >"+ data[i].date +"*" + data[i].category +" &nbsp;&nbsp;</small> <a style='font-size:25px;font-family:  Helvetica, Arial, serif;'  href='data[i].url' >"+data[i].title+"</a>";
					$("#main-content").append(child);
					console.log(data[i]);
				}
					
			}
			
		},
		error:function(a){
			console.log("false");

		}
	});
	
});