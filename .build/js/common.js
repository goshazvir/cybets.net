head.ready(function() {

	window.dima = baron({
	    root: '.js-baron',
	    scroller: '.scroller',
	    bar: '.scroller__bar',
	    barOnCls: 'baron'
	});

	$('.js-chat-close').on('click', function() {
	 $(".chat").addClass("is-hide");
	 $(".shares").addClass("is-open");
	});

	var windowheight = $(window).height();
	var chatheight = (windowheight - 180);
	$(".js-chat-set-height").css('min-height', chatheight);

});