$(document).ready(function () {
    'use strict';
    $('html').niceScroll({
		cursorcolor: "#CCC",
		cursorwidth: 5,
		scrollspeed: 40,
		background: "#FFF",
		cursorborder: "none",
		autohidemode: false,
        zindex: 99999
    });
});

/*
$(document).ready(function () {
    'use strict';
    var s01Top = $('#scene01').offset(),
        s02Top = $('#scene02').offset(),
        s03Top = $('#scene03').offset(),
        
        winH = $(window).height(),
        
        sceneNum01 = 0,
        sceneNum02 = 0;
    
    $(document).scroll(function () {
        var curScrollTop = $(document).scrollTop();

        $("#result").text("current scrolltop: " + curScrollTop + ", " +
                          "scene02 scrolltop: " + s02Top.top + ", " +
                          "window height :" + winH + ", " +
                          "sceneNum :" + sceneNum01);

        if (curScrollTop > s01Top.top  && sceneNum01 === 0) {
            $('html, body').animate({
                scrollTop: winH
            }, 1000, 'easeInOutExpo');
            
            if (curScrollTop === s02Top.top) {
                sceneNum01 = 2;
            }
        }
        if (curScrollTop < s02Top.top && sceneNum01 === 2) {
            $('html, body').animate({
                scrollTop: s01Top.top
            }, 1000, 'easeInOutExpo');
            if (curScrollTop === s01Top.top) {
                sceneNum01 = 0;
            }
        }
    });
});
*/
                  
/*--Scroll easing effect--*/
$(document).ready(function () {
    'use strict';
    $('a').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 800, 'easeInOutExpo');
		return false;
	});
});



$(document).ready(function () {
    'use strict';
    $('.nav_icon').click(function () {
		$(this).toggleClass('open');
	});
});