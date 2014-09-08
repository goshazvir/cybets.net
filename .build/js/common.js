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


	function chat_fixed() {
		var position = $(".cb-nav-filter").offset().top;
		var position_2 = $(".chat__fixed").offset().top;

		if ($(window).scrollTop() > position) {
		  $(".chat__fixed").addClass('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
		  // alert(position);
		}
		if ($(window).scrollTop() <= position_2) {
		  $(".chat__fixed").removeClass('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
		  // alert(position_2);
		}
	}
	chat_fixed();

});