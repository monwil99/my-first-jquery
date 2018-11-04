$(function() {

//$("#list").find("li").filter(":even").css("background-color", "rgba(180,180,30,0.8)")
//$("#list").children("li").filter(":even").css("background-color", "rgba(180,180,30,0.8)")
/*$("li").filter(function(index){
	// return true if the index is 0,3,6
	return index % 3 === 1;
	//return 1,4,7,10
	}).css("background-color", "rgba(180,180,30,0.8)")*/

//$("li").first().css("background-color", "rgba(180,180,30,0.8)")
//$("li").last().css("background-color", "rgba(180,180,30,0.8)")
//$("li").eq(4).css("background-color", "rgba(180,180,30,0.8)")

//from the last going back
//$("li").eq(-2).css("background-color", "rgba(180,180,30,0.8)")
//$("li").not(":first").css("background-color", "rgba(180,180,30,0.8)")
//$("li").not(":first").css("background-color", "rgba(180,180,30,0.8)")
//only the main items but not the sub items
//$("li").not("#list ul li").css("background-color", "rgba(180,180,30,0.8)")

// all except the 3rd, 6th
$("li").not(function(index){
	return index % 3 === 2;

}).css("background-color", "rgba(180,180,30,0.8)")



});