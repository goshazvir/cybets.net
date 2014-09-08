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
	var chatheight = (windowheight);
	var chatheight2 = (windowheight);
	$(".js-chat-set-height").css('min-height', chatheight);
	$(".js-chat-set-height2").css('min-height', chatheight - 250);


	function chat_fixed() {
		var position = $(".cb-nav-filter").offset().top;
		var position_2 = $(".chat").offset().top;
		if ($(window).scrollTop() >= position) {
		  $(".chat__fixed").addClass("js-fixed");
		  // alert(position);
		}
		if ($(window).scrollTop() < position_2) {
		  $(".chat__fixed").removeClass("js-fixed");
		  // alert(position_2);
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