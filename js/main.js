$(document).ready(function(){
	$("#page_top").click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	var fixedside= $('#page_top');
	$(window).scroll(function(){
		if (window.pageYOffset >= 100) {
			fixedside.addClass("scroll");
		} else {
			fixedside.removeClass("scroll");
		}
	});	
})