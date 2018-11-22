$(function() {
  $(".blue-box").animate({
  	//java objects here
  	"margin-left" : "+=200px"
  	//linear - 2px ever 5 ms (200px/1000)
  	//default is swing

  }, 1000, "linear" );

  $(".blue-box").animate({
  	//java objects here
  	"margin-left" : "-=200px"
    //linear - 2px ever 5 ms (200px/1000)
    //default is swing

  }, 1000, "linear" );



//Ctrl + L , ctrl + shift + arrow up or down
//Ctrl + shift + D

});