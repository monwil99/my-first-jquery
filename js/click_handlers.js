$(function() {

$("#btn-click").click(function(){
	console.log(event);
	alert("Button was clicked");

});


$(".red-box").click(function(){

	//alert("Red Box was clicked");
	$(this).fadeTo(5000,0.5);
	//$(".red-box").fadeTo(1000, 0.3);
});

// this will call red box event handler upon loading of the page.
$(".red-box").click();
});