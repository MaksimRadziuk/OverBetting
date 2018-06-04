$(document).ready(function(){

	if (innerWidth>1260) {
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
			$('.leftSidebar').addClass('active').delay(500).hide();
			$('.mainPart').css('width', contentWidth-340);
		});
	}

	
	if (innerWidth<=1260 && innerWidth>960) {
		var contentWidth = $(window).innerWidth();
		$('.mainPart').css('width', contentWidth-350);

		$( window ).resize(function() {
			var appear = $('.leftSidebar').hasClass('active');
			if (appear == true) {
				var contentWidth = $(window).innerWidth();
		  		$('.mainPart').css('width', contentWidth-280);
			}
			else{
				var contentWidth = $(window).innerWidth();
		  		$('.mainPart').css('width', contentWidth-350);
			}
		  
		});

		$('#leftSidebarToggle').click(function(){
			$('.leftSidebar').addClass('active').delay(500).hide();
			$('.mainPart').css('width', contentWidth-280);
		});
	}


	

	if (innerWidth>960) {
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

	$('.menu__button').click(function(){
		$('.menu__content').toggle();
		$(this).children('span').toggleClass('active');
	});
	$('.menu__content>.firstLevel>li').click(function(){
		$('.menu__content>.firstLevel').hide();
		$('.menu__content>.secondLevel').show();
	});
	$('.menu__content>.secondLevel>.getBack').click(function(){
		$('.menu__content>.secondLevel').hide();
		$('.menu__content>.firstLevel').show();
	});

	$('.newsList__button').click(function(){
		$('.newsLIst__wrap').toggle();
		$(this).children('span').toggleClass('active');
	});

	$('.sportSelect__button').click(function(){
		$('.sportSelect__content').toggle();
		$(this).children('span.icon').toggleClass('active');
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
        pauseOnHover:false,
        responsive: [
	    {
	      breakpoint: 961,
	      settings: {
	        arrows:false
	      }
	    }
	  ]
    });

	var barHeight = $('.content').innerHeight();
	$('.leftSidebar').css('height', barHeight);
	$('.rightSidebar').css('height', barHeight);

	
}); 