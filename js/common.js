
$(document).ready(function(){
	$('.slider-head').slick({
		autoplay:true,
		infinite: true,
		slidesToShow: 1,
		dots: true,
		slidesToScroll: 1,
		arrows: false
	})
});

$(document).ready(function(){

	$('.questionPart').click(function() {
		$(this).next('.answerPart').slideToggle();
	})

	$('.play-btn').click(function(){
		$(this).fadeOut();
		$(this).next('.pause-btn').fadeIn();
	});
	$('.pause-btn').click(function(){
		$(this).fadeOut();
		$(this).prev('.play-btn').fadeIn();
	});

});

$(document).ready(function(){
	$('select').each(function(){
		$(this).siblings('p.option').text( $(this).children('option:selected').text() );
	});
	$('select').change(function(){
		$(this).siblings('p.option').text( $(this).children('option:selected').text() );
	});
});

$(document).ready(function(){

	if (innerWidth < 856) {

		$('.hot-offers-slider').slick({
			infinite: true,
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			arrows:true,
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    }
		  ]
		});
	}

	if (innerWidth < 768) {

		$('.business-entrance-slider').slick({
			infinite: true,
  			slidesToShow: 2,
  			slidesToScroll: 2,
  			arrows:true,
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    }
		  ]
		});

		$('.business-slider').slick({
			infinite: true,
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows:true, 
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    }
		  ]
		});

		$('.guaranties-slider').slick({
			infinite: true,
  			slidesToShow: 3,
  			slidesToScroll: 1,
  			arrows:true,
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: true
		      }
		    }
		  ]
		});
		
		$('.personal-slider').slick({
			infinite: true,
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			arrows:true,
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    }
		  ]
		});

		$('.decisions-slider').slick({
			infinite: true,
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			arrows:true,
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    }
		  ]
		});

		$('.social-slider').slick({
			infinite: true,
  			slidesToShow: 3,
  			slidesToScroll: 3,
  			arrows:true,
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    }
		  ]
		});
		
	}

	if (innerWidth < 551) {
		$('.production-slider').slick({
			infinite: true,
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows:false,
  			dots:true
		});

		$('.reasons-slider').slick({
			infinite: true,
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows:false,
  			dots:true
		});

	}

	if (innerWidth < 768 && innerWidth > 550) {

		$('.category-slider').slick({
			infinite: true,
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			arrows:true,
  			responsive: [
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    }
		  ]
		});
	}
	

	else{

	}
});



function init1() {
    document._video = document.getElementById("video");
}
document.addEventListener("DOMContentLoaded", init1, false);




$(document).ready(function(){
    var controls1 = {
        video: $("#video1"),
        play: $("#play1"),
        pause: $('#pause1')                 
    };
    var controls2 = {
        video: $("#video2"),
        play: $("#play2"),
        pause: $('#pause2')                 
    };
    var controls3 = {
        video: $("#video3"),
        play: $("#play3"),
        pause: $('#pause3')                 
    };
    var controls4 = {
        video: $("#video4"),
        play: $("#play4"),
        pause: $('#pause4')                 
    };

	var video1 = controls1.video[0];
	var video2 = controls2.video[0];
	var video3 = controls3.video[0];
	var video4 = controls4.video[0];
               
    controls1.play.click(function(){
            video1.play();    
    });
    controls2.play.click(function(){
            video2.play();    
    });
    controls3.play.click(function(){
            video3.play();    
    });
    controls4.play.click(function(){
            video4.play();    
    });

    controls1.pause.click(function(){
            video1.pause();    
    });
    controls2.pause.click(function(){
            video2.pause();    
    });
    controls3.pause.click(function(){
            video3.pause();    
    });
    controls4.pause.click(function(){
            video4.pause();    
    });

    $('video').on('ended', function(){
    	$(this).siblings('.play-btn').fadeIn();
    	$(this).siblings('.pause-btn').fadeOut();
    });

}); 



$(document).ready(function(){

if (innerWidth > 611) {
	$('.drop-popup-trigger1').click(function(){
		$('.drop-popup.first').delay(300).slideToggle();
		$('.drop-popup.second').slideUp();
		$('.drop-popup.third').slideUp();
	});

	$('.drop-popup-trigger2').click(function(){
		$('.drop-popup.second').delay(300).slideToggle();
		$('.drop-popup.third').slideUp();
		$('.drop-popup.first').slideUp();
	});

	$('.drop-popup-trigger3').click(function(){
		$('.drop-popup.third').delay(300).slideToggle();
		$('.drop-popup.second').slideUp();
		$('.drop-popup.first').slideUp();
	});

	var w = $('body').innerWidth();
	var wp = $('.drop-popup').innerWidth();
	var d = w-wp;
	var m = d/2;
	$('.drop-popup').css('left', m);

	$(window).resize(function() {

		var w = $('body').innerWidth();
		var wp = $('.drop-popup').innerWidth();
		var d = w-wp;
		var m = d/2;
		$('.drop-popup').css('left', m);

    });

}

else {}
	

	$('.menu-button').click(function(){
		$('.menu-mobile').fadeIn();
		$('#popup-background').fadeIn();
	});

	$('.heading-button').click(function(){
		$('.callOrder-form').fadeIn();
		$('#popup-background').fadeIn();
	});

	$('.orderCall').click(function(){
		$('.callOrder-form').fadeIn();
		$('#popup-background').fadeIn();
	});

	$('li.parent').click(function(){
		$(this).children('.submenu').slideToggle();
		$(this).toggleClass('rotate');
	});

	$('.close-btn').click(function(){
		$(this).closest('.popup').fadeOut();
		$('#popup-background').delay(200).fadeOut();
	});

	$('.menu-mobile .hamburger').click(function(){
		$(this).closest('.popup').fadeOut();
		$('#popup-background').delay(200).fadeOut();
	});
	

});




//активация маски ввода Номер телефона
jQuery(function($){
   $("#phone").mask("+7 (999) 999-9999");
   });

// Маска заполнения формы НОМЕР ТЕЛЕФОНА
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, 
            this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), 
                range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), 
                range.select());
            })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
            begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), 
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length, 
            firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), 
                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), 
                        begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), 
                        end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), 
                        e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), 
                        input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), 
                            p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1), 
                        tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), 
                    clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), 
                    partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), 
                checkVal();
            });
        }
    });
});




$('.ittem_slider_img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.ittem_slider_img_nav'
});
$('.ittem_slider_img_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.ittem_slider_img',
  dots: false,
  nav: true,
  adaptiveHeight: true,
  infinite: false,
  prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
  nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
  centerMode: false,
  focusOnSelect: true,
});


$(document).ready(function(){
	if (innerWidth > 1199) {
		$('.slidet_tab_video').slick({
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows:true,
  			dots:false,
  			nav: true,
  			infinite: false,
  			prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
  			nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
		});
		$('.tov_gallery_slider').slick({
  			slidesToShow: 5,
  			slidesToScroll: 1,
  			arrows:true,
  			dots:false,
  			nav: true,
  			infinite: false,
  			prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
  			nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
		});
	}
	if (innerWidth < 1200 && innerWidth > 720) {
		$('.tovar_slider_t').slick({
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			arrows:true,
  			dots:false,
  			nav: true,
  			infinite: false,
  			prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
  			nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
		});
		$('.tovar_slider_o').slick({
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			arrows:true,
  			dots:false,
  			nav: true,
  			infinite: false,
  			prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
  			nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
		});
    $('.tov_gallery_slider').slick({
        slidesToShow: 2,
        rows: 2,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        nav: true,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
    $('.img_sertifitate_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        nav: true,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
    $('.sliter_zap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        nav: true,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
    $('.slidet_tab_video').slick({
        slidesToShow: 1,
        rows: 2,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        nav: true,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
	}
	if (innerWidth < 721) {
		$('.tovar_slider_t').slick({
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows:false,
  			dots:false,
  			nav: false,
  			infinite: false,
  			prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
  			nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
		});
		$('.tovar_slider_o').slick({
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows:false,
  			dots:false,
  			nav: false,
  			infinite: false,
  			prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
  			nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
		});
    $('.tov_gallery_slider').slick({
        slidesToShow: 1,
        rows: 5,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        nav: false,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
    $('.img_sertifitate_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        nav: false,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
    $('.sliter_zap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        arrows:false,
        dots:false,
        nav: false,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
    $('.slidet_tab_video').slick({
        slidesToShow: 1,
        rows: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        nav: true,
        infinite: false,
        prevArrow: "<p class=\"slider_prev\"><img src=\"img/prew_slide.png\"></p>",
        nextArrow: "<p class=\"slider_next\"><img src=\"img/next_slide.png\"></p>",
    });
    $('.left_klom_block').slick({
        slideToShow: 1,
        rows: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false 
    });

	}
	else {

	}

});


$(document).ready(function(){
    $('select').each(function(){
        $(this).siblings('p.option').text( $(this).children('option:selected').text() );
    });
    $('select').change(function(){
        $(this).siblings('p.option').text( $(this).children('option:selected').text() );
});



if (innerWidth >720) {


    var heightTab = $('.ittem_tab_info').innerHeight();
    $('ul.parent').css('paddingBottom', heightTab+30);

    $('.ittem_tab_to_info>p').click(function(){
        $(".ittem_tab_cont>div, .ittem_tab_naw>ul>li>p").removeClass('active');
        $(".ittem_tab_cont>div").css("height", "0");
        $(this).addClass('active');
        $(".ittem_tab_info").addClass('active');
        $(".ittem_tab_info").css("height", "auto");

        var heightTabInfo = $('.ittem_tab_info').innerHeight();
        $('ul.parent').css('paddingBottom', heightTabInfo);

        /*if (innerWidth > 1199) {
        $('ul.parent').css('paddingBottom', '740px');
        }
        if (innerWidth < 1200 && innerWidth > 991) {
            $('ul.parent').css('paddingBottom', '1145px');
        }
        if (innerWidth < 992 && innerWidth >720) {
            $('ul.parent').css('paddingBottom', '1219px');
        }
        else {}*/

    });
    $('.ittem_tab_to_comlp>p').click(function(){
        $(".ittem_tab_cont>div, .ittem_tab_naw>ul>li>p").removeClass('active');
        $(".ittem_tab_cont>div").css("height", "0");
        $(this).addClass('active');
        $(".ittem_tab_comlp").addClass('active');
        $(".ittem_tab_comlp").css("height", "auto");

        var heightTabComlp = $('.ittem_tab_comlp').innerHeight();
        $('ul.parent').css('paddingBottom', heightTabComlp+30);

        /*if (innerWidth > 1199) {
        $('ul.parent').css('paddingBottom', '490px');
        }
        if (innerWidth < 1200 && innerWidth > 991) {
            $('ul.parent').css('paddingBottom', '775px');
        }
        if (innerWidth < 992 && innerWidth >720) {
            $('ul.parent').css('paddingBottom', '810px');
        }
        else {}*/
    });
    $('.ittem_tab_to_galery>p').click(function(){
        $(".ittem_tab_cont>div, .ittem_tab_naw>ul>li>p").removeClass('active');
        $(".ittem_tab_cont>div").css("height", "0");
        $(this).addClass('active');
        $(".ittem_tab_galery").addClass('active');
        $(".ittem_tab_galery").css("height", "auto");

        var heightTabGalery = $('.ittem_tab_galery').innerHeight();
        $('ul.parent').css('paddingBottom', heightTabGalery);

       /* if (innerWidth > 1199) {
        $('ul.parent').css('paddingBottom', '497px');
        }
        if (innerWidth < 1200 && innerWidth >720) {
            $('ul.parent').css('paddingBottom', '623px');
        }
        else {}*/
    });
    $('.ittem_tab_to_video>p').click(function(){
        $(".ittem_tab_cont>div, .ittem_tab_naw>ul>li>p").removeClass('active');
        $(".ittem_tab_cont>div").css("height", "0");
        $(this).addClass('active');
        $(".ittem_tab_video").addClass('active');
        $(".ittem_tab_video").css("height", "auto");

        var heightTabVideo = $('.ittem_tab_video').innerHeight();
        $('ul.parent').css('paddingBottom', heightTabVideo);
        

        if (innerWidth < 1200 && innerWidth > 991) {
            $('ul.parent').css('paddingBottom', heightTabVideo-3);
        }
        if (innerWidth < 991 && innerWidth > 767) {
            $('ul.parent').css('paddingBottom', heightTabVideo);
        }

        else {}
        /*if (innerWidth > 1199) {
        $('ul.parent').css('paddingBottom', '542px');
        }
        if (innerWidth < 1200 && innerWidth > 991) {
            $('ul.parent').css('paddingBottom', '909px');
        }
        if (innerWidth < 992 && innerWidth >720) {
            $('ul.parent').css('paddingBottom', '1123px');
        }
        else {}*/
    });
    $('.ittem_tab_to_zapt>p').click(function(){
        $(".ittem_tab_cont>div, .ittem_tab_naw>ul>li>p").removeClass('active');
        $(".ittem_tab_cont>div").css("height", "0");
        $(this).addClass('active');
        $(".ittem_tab_zapt").addClass('active');
        $(".ittem_tab_zapt").css("height", "auto");

        var heightTabZapt = $('.ittem_tab_zapt').innerHeight();
        $('ul.parent').css('paddingBottom', heightTabZapt);

        /*if (innerWidth > 1199) {
        $('ul.parent').css('paddingBottom', '455px');
        }
        if (innerWidth < 1200 && innerWidth >720) {
            $('ul.parent').css('paddingBottom', '432px');
        }
        else {}*/
    });

}




    if (innerWidth < 721) {
        $(".ittem_tab_info").removeClass('active');
        

        $('.ittem_tab_to_info>p').click(function(){
            $(this).siblings('.ittem_tab_cont').slideToggle();
            $(".ittem_tab_naw>ul>li>p").removeClass('active');
            $(".ittem_tab_info").toggleClass('active');
        });
        $('.ittem_tab_to_comlp>p').click(function(){
            $(this).siblings('.ittem_tab_cont').slideToggle();
            $(".ittem_tab_comlp").toggleClass('active');
            $(".ittem_tab_naw>ul>li>p").removeClass('active');
            $(this).toggleClass('active');
        });
        
        $('.ittem_tab_to_galery>p').click(function(){
            $(this).siblings('.ittem_tab_cont').slideToggle();
            $(".ittem_tab_galery").toggleClass('active');
            $(".ittem_tab_naw>ul>li>p").removeClass('active');
            $(this).toggleClass('active');
        });
        $('.ittem_tab_to_video>p').click(function(){
            $(this).siblings('.ittem_tab_cont').slideToggle();
            $(".ittem_tab_video").toggleClass('active');
            $(".ittem_tab_naw>ul>li>p").removeClass('active');
            $(this).toggleClass('active');
        });
        $('.ittem_tab_to_zapt>p').click(function(){
            $(this).siblings('.ittem_tab_cont').slideToggle();
            $(".ittem_tab_zapt").toggleClass('active');
            $(".ittem_tab_naw>ul>li>p").removeClass('active');
            $(this).toggleClass('active');
        });
    }

    else {

    }

});