//phone mask
$.jMaskGlobals = {
	translation: {
		'n': {
			pattern: /\d/
		},
	}
};
$('.phone-mask').mask('+380nn-nnn-nnnn').val('+380');

//open menu-list on click
$('.hamburger').click(function () {
	$('.menu-list').toggleClass('open');
});
//animate burger
$('.hamburger').click(function () {
	$('.hamburger--collapse').toggleClass('is-active');
});

//close menu-list on click outside
$('html').click(function () {
	$('.menu-list').removeClass('open');
	$('.hamburger').removeClass('is-active');
});
$('.hamburger').click(function (event) {
	event.stopPropagation();
});

////sticky header
//
//$(window).scroll(function () {
//	var sticky = $('.sticky'),
//		scroll = $(window).scrollTop();
//
//	if (scroll >= 100) sticky.addClass('sticky-header');
//	else sticky.removeClass('sticky-header');
//});
