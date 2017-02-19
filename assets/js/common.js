$(function() {

	$.getScript("http://vk.com/js/api/openapi.js?139");

	$(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $(".left-mnu").slideToggle();
       return false;
    });

	// Custom JS

});
