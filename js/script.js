$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load


  $(".blue-box").slideUp(2000);
  $(".blue-box").slideDown(2000);
  $("p").hide();
  $("p").slideDown(2000);

  
  //$("#mylink").fadeOut(2000);


  //fadeOut,fadeIn,fadeTo,fadeToggle - use fadeTo so not to remove the display
  //show,hide,toggle (useful when hovering on a product to show some details, hover/click on
  // a menu item) - hide jas also paramater like seconds

  //slideUp - disappear sliding up, slideDown - appearing sliding down, slideToggle
  //user clicks on more or plus button, expand or register
  //$("p").hide();
  //$("p").slideDown ( select all paragraphs)

});