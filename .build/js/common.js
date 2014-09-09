head.ready(function() {

	$('.js-translation').on('click', function() {
	 $(".cb-bet-translation").addClass("is-active");
	 $(".cb-bet-list").addClass("is-hide");
	 $(".cb-selection-rates").addClass("is-hide");
	});

	$('.js-match-close').on('click', function() {
		$(".cb-bet-translation").removeClass("is-active");
		$(".cb-bet-list").removeClass("is-hide");
		$(".cb-selection-rates").removeClass("is-hide");
	});

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
	var chatheight = (windowheight);
	var chatheight2 = (windowheight);
	$(".js-chat-set-height").css('height', chatheight);
	$(".js-chat-set-height2").css('height', chatheight - 250);


	function chat_fixed() {
		var position = $(".cb-nav-filter").offset().top;
		var position_2 = $(".chat").offset().top;
		if ($(window).scrollTop() >= position) {
		  $(".chat__fixed").addClass("js-fixed");
		}
		if ($(window).scrollTop() < position_2) {
		  $(".chat__fixed").removeClass("js-fixed");
		}
	}
	if ($(".cb-nav-filter").length > 0){
	  chat_fixed();
	}


	$(window).resize(function(){
	  if ($(".cb-nav-filter").length > 0){
	  	chat_fixed();
	  }
	});
	$(window).scroll(function(){
	  if ($(".cb-nav-filter").length > 0){
	  	chat_fixed();
		}
	});
});