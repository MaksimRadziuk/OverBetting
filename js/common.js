$(document).ready(function(){

	var barHeight = $('.content').innerHeight();
	$('.leftSidebar').css('height', barHeight);

	if (innerWidth>600) {
		$('.rightSidebar__newssheet').jScrollPane();
	}


	$(window).scroll(function() {
		if($(this).scrollTop() >= 400) {
			$('#toTop').addClass('active');
		} 
		else {
			$('#toTop').removeClass('active');
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

});

