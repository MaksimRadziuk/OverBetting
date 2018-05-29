$(document).ready(function(){

	var barHeight = $('.content').innerHeight();
	$('.leftSidebar').css('height', barHeight);

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

	var contentWidth = $(window).innerWidth();
	$('.mainPart').css('width', contentWidth-440);


	$( window ).resize(function() {
	  var contentWidth = $(window).innerWidth();
	  $('.mainPart').css('width', contentWidth-440);
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

});

