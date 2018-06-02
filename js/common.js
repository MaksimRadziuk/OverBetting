$(document).ready(function(){

	var contentWidth = $(window).innerWidth();
	$('.mainPart').css('width', contentWidth-440);

	$( window ).resize(function() {
		var appear = $('.leftSidebar').hasClass('active');
		if (appear == true) {
			var contentWidth = $(window).innerWidth();
	  		$('.mainPart').css('width', contentWidth-340);
		}
		else{
			var contentWidth = $(window).innerWidth();
	  		$('.mainPart').css('width', contentWidth-440);
		}
	  
	});

	$('#leftSidebarToggle').click(function(){
		$('.leftSidebar').toggleClass('active').delay(500).hide();
		$('.mainPart').css('width', contentWidth-340);
	});


	

	if (innerWidth>600) {
		$('.rightSidebar__newssheet').jScrollPane();
		$('.navMenu>ul>li:nth-child(6)>.submenu>.rightPart>.innerPart_wrap>.innerPart').jScrollPane();
		$('.navMenu>ul>li:nth-child(7)>.submenu>.leftPart>.innerPart>ul').jScrollPane();
		$('.navMenu>ul>li:nth-child(7)>.submenu>.rightPart>.innerPart>ul').jScrollPane();
		$('.navMenu>ul>li:last-child>.submenu>.leftPart>.innerPart>ul').jScrollPane();
		$('.navMenu>ul>li:last-child>.submenu>.rightPart>.innerPart>ul').jScrollPane();
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

	


	

	$('.navMenu>ul>li:last-child>.submenu>.categoryPart>.innerPart>ul>li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	$('.navMenu>ul>li:last-child>.submenu>.leftPart>.innerPart ul li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	$('.navMenu>ul>li:nth-child(7)>.submenu>.leftPart>.innerPart ul li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('button.more').click(function(){
		$('.bookmakers_box').toggleClass('active');
	});

	$('#matchReview').click(function(){
		$(this).addClass('active');
		$('#betReview').removeClass('active');
		$('#betContent').removeClass('active');
		$('#matchContent').addClass('active');
	});
	$('#betReview').click(function(){
		$(this).addClass('active');
		$('#matchReview').removeClass('active');
		$('#matchContent').removeClass('active');
		$('#betContent').addClass('active');
	});

	

});

$(window).on("load", function() { 
	
	$('.sliderMain').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        loop:true,
        autoplay:true,
        autoplaySpeed:5000,
        speed:2000,
        fade:true,
        pauseOnFocus:false,
        pauseOnHover:false
    });

	var barHeight = $('.content').innerHeight();
	$('.leftSidebar').css('height', barHeight);
	$('.rightSidebar').css('height', barHeight);

	
}); 