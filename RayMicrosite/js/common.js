/*global $ */

$(function () {
    'use strict';
    $('html').niceScroll({
		cursorcolor: "#CCC",
		cursorwidth: 5,
		scrollspeed: 40,
		mousescrollstep: 40,
		background: "#FFF",
		cursorborder: "none",
		autohidemode: false,
		zindex: 99999
    });
});

$(function () {
    'use strict';
    $('.closeBtn').click(function () {
        $('.guideWindow').hide();
    });
});

$(function () {
    'use strict';
	$('.guideBg').stop().animate({
        'opacity' : '0.9'
			
	}, 1000);
});


var scene02Num = 1;
var scene03Num = 1;
var scene05Num = 1;
var scene06_1Num = 1;
var scene06_2Num = 1;
var scene07Num = 1;

/*----------- not repeated animation-----------*/
$(function () {
    'use strict';
    $(window).scroll(function () {
		var scrollTop = $(document).scrollTop();

		/*-------------scene02 Animation-----------*/
		if (scrollTop > 400 && scene02Num === 1) {
			/*-------BG-------*/
			scene02Num = 0;
			$('.page02 .bgPtt01').stop().animate({
				'opacity': '1',
				'margin-top': '0px'
			}, 700);
			
			$('.page02 .bgPtt02').stop().delay(200).animate({
				'opacity': '1',
				'margin-top': '0px'
			}, 800);
			
			$('.page02 .bgPtt03').stop().delay(500).animate({
				'opacity': '1',
				'margin-top': '0px'
			}, 900);
			
			/*------Title-------*/
		
			$('.page02 .titleNum').stop().animate({
				'opacity': '1'
			}, 1000);
		
			$('.page02 .titleSmall').stop().delay(100).animate({
				'opacity': '1',
				'margin-left': '844px'
			}, 700);
		
			$('.page02 .titleBig').stop().delay(200).animate({
				'opacity': '1',
				'margin-left': '664px'
			}, 900);
		
			$('.page02 .line').stop().delay(100).animate({
				'height': '64px'
			}, 1000);
		
			$('.page02 .bodytext').stop().delay(500).animate({
				'opacity': '1',
				'margin-top': '269px'
			}, 900);
		}


		/*--------scene03 Title Animation----------*/
		if (scrollTop > 1400 && scene03Num === 1) {
			scene03Num = 0;
			$('.page03 .titleNum').stop().animate({
				'opacity': '1'
			}, 1000);
		
			$('.page03 .titleSmall').stop().delay(100).animate({
				'opacity': '1',
				'margin-left': '460px' /*30*/
			}, 700);
		
			$('.page03 .titleBig').stop().delay(200).animate({
				'opacity': '1',
				'margin-left': '457px'	/*30*/
			}, 900);
		
			$('.page03 .bodytext').stop().delay(400).animate({
				'opacity': '1',
				'margin-top': '343px' /*20*/
			}, 1000);
			
			
			/*------rightCar------*/
			$('.page03 .rightCarbg').stop().delay(500).animate({
				'opacity': '1',
				'margin-top': '100px',
				'margin-left': '910px'
			}, 1000);
			
			$('.page03 .rightCar').stop().delay(700).animate({
				'opacity': '1',
				'margin-top': '258px',
				'margin-left': '999px'
			}, 700);
		
			$('.page03 .rightCarS_1').stop().delay(1000).animate({
				'opacity': '1',
				'margin-top': '365px',
				'margin-left': '897px'
			}, 1000);
		
			$('.page03 .rightCarS_2').stop().delay(900).animate({
				'opacity': '1',
				'margin-top': '390px',
				'margin-left': '1072px'
			}, 1000);
		
		}


		/*--------scene05 Title Animation----------*/
		if (scrollTop > 2680 && scene05Num === 1) {
			scene05Num = 0;
			$('.page05 .titleNum').stop().animate({
				'opacity': '1',
				'margin-left': '894px'
			}, 1000);
		
			$('.page05 .titleSmall').stop().delay(100).animate({
				'opacity': '1',
				'margin-left': '951px'
			}, 700);
		
			$('.page05 .titleBig').stop().delay(200).animate({
				'opacity': '1'
			}, 900);
		
			$('.page05 .bodytext').stop().delay(400).animate({
				'opacity': '1',
				'margin-top': '344px'
			}, 1000);
		}
			
		/*--------scene06 Animation----------*/
		if (scrollTop > 3950 && scene06_1Num === 1) {
			scene06_1Num = 0;
			/*---Left Car---*/
			$('.page06 .leftCarM').stop().animate({
				'opacity': '1',
				'top': '-175px'
			}, 1000);

			$('.page06 .leftCarS').stop().delay(500).animate({
				'opacity': '1',
				'left': '67px'
			}, 700);

			$('.page06 .leftCar').stop().delay(400).animate({
				'opacity': '1',
				'left': '99px'
			}, 1000);
		}
		
		if (scrollTop > 4320 && scene06_2Num === 1) {
			scene06_2Num = 0;
			/*---Title---*/
			$('.page06 .titleNum').stop().animate({
				'opacity': '1',
				'margin-left': '914px'
			}, 1000);
		
			$('.page06 .titleSmall').stop().delay(100).animate({
				'opacity': '1',
				'margin-left': '969px'
			}, 700);
		
			$('.page06 .titleBig').stop().delay(200).animate({
				'opacity': '1'
			}, 900);
		
			$('.page06 .bodytext').stop().delay(400).animate({
				'opacity': '1',
				'margin-top': '345px'
			}, 1000);
		}


		/*--------scene07 Title Animation----------*/
		if (scrollTop > 5320 && scene07Num === 1) {
			scene07Num = 0;
			
			/*---title---*/
			$('.page07 .titleNum').stop().animate({
				'opacity': '1'
			}, 1000);
		
			$('.page07 .titleSmall').stop().delay(100).animate({
				'opacity': '1',
				'margin-left': '459px'
			}, 700);
		
			$('.page07 .titleBig').stop().delay(200).animate({
				'opacity': '1',
				'margin-left': '461px'
			}, 900);

			$('.page07 .titleBigSub').stop().delay(300).animate({
				'opacity': '1',
				'margin-left': '461px'
			}, 1000);
		
			$('.page07 .bodytext').stop().delay(400).animate({
				'opacity': '1',
				'margin-top': '388px'
			}, 1000);
			
			/*---Price Banner---*/
			$('.page07 .bannerT').stop().delay(1100).animate({
				'opacity': '1',
                'margin-top': '380px',
				'margin-left': '1025px'
			}, 400);

			$('.page07 .bannerM_1').stop().delay(800).animate({
				'opacity': '1',
				'margin-top': '385px',
				'margin-left': '1025px'
			}, 700);
			
			$('.page07 .bannerM_2').stop().delay(1000).animate({
				'opacity': '1',
				'margin-top': '385px',
				'margin-left': '1025px'
			}, 500);
		
			$('.page07 .bannerS').stop().delay(1300).animate({
				'opacity': '1',
				'margin-top': '385px',
				'margin-left': '1025px'
			}, 1000);

			/*---rightCar---*/
			$('.page07 .rightCarM').stop().delay(500).animate({
				'opacity': '1',
				'margin-top': '203px',
				'margin-left': '1265px'
			}, 1000);
			
			$('.page07 .rightCar').stop().delay(700).animate({
				'opacity': '1',
				'margin-top': '481px',
				'margin-left': '1005px'
			}, 700);
		
			$('.page07 .rightCarS').stop().delay(900).animate({
				'opacity': '1',
				'margin-top': '696px',
				'margin-left': '377px'
			}, 1000);
		}
	});
});



/*--Repeated horizontal animation via Mouse Xposition--*/
$(function () {
    'use strict';
    $(document).mousemove(function (event) {
		
		$('.page01 .obj01').stop().animate({'margin-left': (event.pageX - 10) * 0.04}, 300);
		$('.page01 .obj02').stop().animate({'margin-left': (-(event.pageX - 10) * 0.06)}, 400);
/*--
		$('.page06 .leftCarM').stop().animate({'margin-left':(-(event.pageX-10)*0.012)}, 500);
		$('.page06 .leftCarS').stop().animate({'margin-left':(-(event.pageX-10)*0.012)}, 500);
		$('.page06 .leftCar').stop().animate({'margin-left':(-(event.pageX-10)*0.012)}, 500);
--*/
    });
});

/*--Repeated vertical Animation via Scroll position--*/
$(function () {
    'use strict';
	$(window).scroll(function () {
		var scrollTop = $(document).scrollTop();
	
        $('.page04 .rbCar').stop().animate({'margin-left': (scrollTop - 3500) * 0.2}, 500);
		$('.page04 .rbTxt').stop().animate({'margin-left': (-(scrollTop - 2000) * 0.03)}, 1000);
									
		$('.page05 .obj01').stop().animate({'margin-top': (-(scrollTop - 3100) * 0.1)});
		$('.page05 .obj02').stop().animate({'margin-top': ((scrollTop - 4000) * 0.05)}, 300, 'swing');
		$('.page05 .obj01_s').stop().animate({'margin-top': (-(scrollTop - 3100) * 0.08)});
		$('.page05 .obj02_s').stop().animate({'margin-top': ((scrollTop - 4000) * 0.03)}, 300, 'swing');
	});
});
	
/*--Scroll easing effect--*/
$(function () {
    'use strict';
	$('a').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'easeInOutExpo');
		return false;
	});
});


/*--GNB--*/
$(function () {
	/*--mouseOver image change--*/
    'use strict';
	$('#menu01').hover(
		function () {$('#menu01').css('background', 'url(image/gnb/01main_over.png)'); },
		function () {$('#menu01').css('background', 'url(image/gnb/01main.png)'); }
    );

	$('#menu02').hover(
		function () { $('#menu02').css('background', 'url(image/gnb/02vr_over.png)'); },
		function () { $('#menu02').css('background', 'url(image/gnb/02vr.png)'); }
    );

	$('#menu03').hover(
		function () { $('#menu03').css('background', 'url(image/gnb/03exterior_over.png)');	},
		function () { $('#menu03').css('background', 'url(image/gnb/03exterior.png)'); }
    );

	$('#menu04').hover(
		function () {$('#menu04').css('background', 'url(image/gnb/04interior_over.png)');	},
		function () {$('#menu04').css('background', 'url(image/gnb/04interior.png)'); }
    );

	$('#menu05').hover(
		function () {$('#menu05').css('background', 'url(image/gnb/05space_over.png)'); },
		function () {$('#menu05').css('background', 'url(image/gnb/05space.png)'); }
    );
	
	$('#menu06').hover(
		function () {$('#menu06').css('background', 'url(image/gnb/06spec_over.png)'); },
		function () {$('#menu06').css('background', 'url(image/gnb/06spec.png)'); }
    );
	

	/*--Image change via page (location)--*/
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= 0 && scrollTop < 950) {
            $('#menu01').css('background', 'url(image/gnb/01main_over.png)');
        } else {
            $('#menu01').css('background', 'url(image/gnb/01main.png)');
        }
		
		if (scrollTop >= 950 && scrollTop < 1950) {
            $('#menu02').css('background', 'url(image/gnb/02vr_over.png)');
        } else {
            $('#menu02').css('background', 'url(image/gnb/02vr.png)');
        }

		if (scrollTop >= 1950 && scrollTop < 3230) {
            $('#menu03').css('background', 'url(image/gnb/03exterior_over.png)');
        } else {
            $('#menu03').css('background', 'url(image/gnb/03exterior.png)');
        }

		if (scrollTop >= 3230 && scrollTop < 4820) {
            $('#menu04').css('background', 'url(image/gnb/04interior_over.png)');
        } else {
            $('#menu04').css('background', 'url(image/gnb/04interior.png)');
        }

		if (scrollTop >= 4820 && scrollTop < 5820) {
            $('#menu05').css('background', 'url(image/gnb/05space_over.png)');
        } else {
            $('#menu05').css('background', 'url(image/gnb/05space.png)');
        }

		if (scrollTop >= 5820) {
            $('#menu06').css('background', 'url(image/gnb/06spec_over.png)');
        } else {
            $('#menu06').css('background', 'url(image/gnb/06spec.png)');
        }

    });
});
