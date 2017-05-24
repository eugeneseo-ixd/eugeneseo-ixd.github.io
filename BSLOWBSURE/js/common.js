$(document).ready(function () {
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