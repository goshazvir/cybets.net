head.ready(function() {

	function accorderon(){
	 $(".js-accordion .js-accordion__content").hide();
	 $(".js-accordion .js-accordion__content").first().show();

	 $(".js-accordion__title").each(function(){
	  $(this).on('click', function(){
	   if ($(this).hasClass('is-open')) {
	    $(this).removeClass('is-open');
	    $(this).next().slideUp('fast');
	   }
	   else {
	    $(".js-accordion__title").removeClass('is-open');
	    $(this).addClass('is-open');
	    $(".js-accordion__content").slideUp('fast');
	    $(this).next().slideDown('fast');
	   }
	  });
	 });
	}
	
	if ($('.js-accordion').length) {
	 accorderon();
	};


	$('.js-translation').on('click', function() {
	 $(".cb-bet-translation").addClass("is-active");
	 $(".cb-bet-list").addClass("is-hide");
	 $(".cb-selection-rates").addClass("is-hide");
	 
	 $(".cb-totalisator").addClass("is-hide");
	 $(".cb-news").addClass("is-hide");
	});

	$('.js-match-close').on('click', function() {
		$(".cb-bet-translation").removeClass("is-active");
		$(".cb-bet-list").removeClass("is-hide");
		$(".cb-selection-rates").removeClass("is-hide");

		$(".cb-totalisator").removeClass("is-hide");
		$(".cb-news").removeClass("is-hide");
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


	function match_height() {
		var windowheight = $(window).height();
		var matchheight = (windowheight - 100);
		$(".match__items").css("height",matchheight);
	}
	if ($(".match__items").length > 0){
	  match_height();
	}
	// var chatheight = (windowheight);
	// var chatheight2 = (windowheight);
	// $(".js-chat-set-height").css('height', chatheight);
	// $(".js-chat-set-height2").css('height', chatheight - 250);
	function chat_fixed() {
		var position = $(".js-set-absolute").offset().top;
		var position_2 = $(".chat").offset().top;
		if ($(window).scrollTop() >= position) {
		  // $(".chat__fixed").addClass("js-fixed");
		  $(".chat__fixed").removeClass("js-absolute");
		  $(".chat__in").removeClass("js-absolute");
		}
		if ($(window).scrollTop() < position_2) {
		  // $(".chat__fixed").removeClass("js-fixed");
		  $(".chat__fixed").addClass("js-absolute");
		  $(".chat__in").addClass("js-absolute");
		}
	}

	if ($(".js-set-absolute").length > 0){
	  chat_fixed();
	}

	$(window).resize(function(){
	  chat_fixed();
	  match_height();
	});

	$(window).scroll(function(){
	  if ($(".js-set-absolute").length > 0){
	  	chat_fixed();
		}
	});

	function modals() {
		$(document).on("click", function(){
			$(".js-overlay").hide();
			$("body").removeClass("has-open-popup");
		});
		$(".js-popup-link").on("click", function(event){
			$(".js-overlay").fadeOut(200);
			var popup = $(this).attr("href");
			$("body").addClass("has-open-popup");
			$("."+popup).parent().fadeIn(200);
			event.stopPropagation();
			return false;
		});
		$(".js-popup-close").on("click", function(){
			$(".js-overlay").fadeOut(200);
			$("body").removeClass("has-open-popup")
			return false;
		});
		$(".js-popup").on("click", function(event){
			event.stopPropagation();
		});
	} modals();



});