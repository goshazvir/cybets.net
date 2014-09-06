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
});