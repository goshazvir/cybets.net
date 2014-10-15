head.ready(function() {
	// accorderon
	function accorderon(){
	 $(".js-accordion .js-accordion-content").hide();
	 $(".js-accordion .js-accordion-content").first().show();
	 $(".js-accordion-title").each(function(){
	  $(this).on('click', function(){
	   if ($(this).hasClass('is-open')) {
	    $(this).removeClass('is-open');
	    $(this).next().slideUp('fast');
	   }
	   else {
	    $(".js-accordion-title").removeClass('is-open');
	    $(this).addClass('is-open');
	    $(".js-accordion-content").slideUp('fast');
	    $(this).next().slideDown('fast');
	   }
	  });
	 });
	}
	if ($('.js-accordion').length) {
	 accorderon();
	};

	function chart(){
		$('.js-chart').easyPieChart({
			easing: 'easeOutBounce',
			barColor: "#8bd859",
			trackColor: "#f3f3f3",
			scaleColor: "transparent",
			lineWidth: "20",
			lineCap: "butt",
			size: "200",
			onStep: function(from, to, percent) {
				$(this.el).find('.cb-chart-percent').text(Math.round(percent));
			}
		});
		var chart = window.chart = $('.js-chart').data('easyPieChart');
		$('.js_update').on('click', function() {
			chart.update(Math.random()*200-100);
		});
	}
	if ($('.js-chart').length) {
	 chart();
	};

	$('.js-translation').on('click', function() {
	 $(".cb-bet-translation").addClass("is-active");
	 $(".cb-bet-list").hide();
	 $(".cb-selection-rates").hide();
	 $(".cb-selection-rates").addClass("is-hide");
	 $(".cb-translation").hide();

	 $(".cb-totalisator").addClass("is-hide");
	 $(".cb-news").addClass("is-hide");
	});

	$('.js-match-close').on('click', function() {
		$(".cb-bet-translation").removeClass("is-active");
		$(".cb-bet-list").show();
		$(".cb-selection-rates").show();
		$(".cb-selection-rates").removeClass("is-hide");
		$(".cb-translation").show();

		$(".cb-totalisator").removeClass("is-hide");
		$(".cb-news").removeClass("is-hide");
	});

	window.dima = baron({
	    root: '.js-baron',
	    scroller: '.scroller',
	    bar: '.scroller-bar',
	    barOnCls: 'baron'
	});

	function mybaron(){
		var getHeightWindow = $(".js-nav-get-height").height();
		var getHeight = $(".js-nav-calc-height").height();

		var setHeight = (getHeightWindow - 10);
		if (getHeight >= getHeightWindow) 
		{
		  $(".cb-primary-nav").addClass('is-scroll');
		  $(".js-nav-calc-height").css('height', setHeight);
		  window.dima = baron({
	      root: '.js-baron2',
	      scroller: '.scroller',
	      bar: '.scroller-bar',
	      barOnCls: 'baron'
		  });
		}
		else
		{
			$(".cb-primary-nav").removeClass('is-scroll');
			$(".js-nav-calc-height").css('height', 'auto');
		};
	}
	if ($(".js-baron2").length > 0){
	  mybaron();
	}

	$('.js-chat-close').on('click', function() {
	 $(".cb-chat").addClass("is-hide");
	 $(".cb-shares").addClass("is-open");
	});
	function match_height() {
		var windowheight = $(window).height();
		var matchheight = (windowheight - 100);
		$(".cb-match-items").css("height",matchheight);
	}
	if ($(".cb-match-items").length > 0){
	  match_height();
	}
	// var chatheight = (windowheight);
	// var chatheight2 = (windowheight);
	// $(".js-chat-set-height").css('height', chatheight);
	// $(".js-chat-set-height2").css('height', chatheight - 250);
	function chat_fixed() {
		var position = $(".js-set-absolute").offset().top;
		var position_2 = $(".cb-chat").offset().top;
		if ($(window).scrollTop() >= position) {
		  // $(".chat__fixed").addClass("js-fixed");
		  $(".cb-chat-fixed").removeClass("js-absolute");
		  $(".cb-chat-in").removeClass("js-absolute");
		}
		if ($(window).scrollTop() < position_2) {
		  // $(".chat__fixed").removeClass("js-fixed");
		  $(".cb-chat-fixed").addClass("js-absolute");
		  $(".cb-chat-in").addClass("js-absolute");
		}
	}

	if ($(".js-set-absolute").length > 0){
	  chat_fixed();
	}

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

	function nav_position() {
		var num = $('.js-nav-each li').length;
		var numHeight = ((num * 60) + 67);
		var windowheight = $(window).height();
		if (numHeight >= windowheight) 
		{
			$(".cb-nav ul").addClass("is-absolute");
		}
		else
		{
			$(".cb-nav ul").removeClass("is-absolute");
		};
	}
	if ($('.js-nav-each').length) {
		nav_position();
	};

	$('.js-nav-push').on('click', function() {
	 $(".cb-viewport-container").toggleClass("is-pushed");
	 $(".cb-nav-overlay").toggleClass("is-active");
	});
	$('.js-nav-reset').on('click', function() {
	 $(".cb-viewport-container").removeClass("is-pushed");
	 $(".cb-nav-overlay").removeClass("is-active");
	});

	$(window).resize(function(){
	  chat_fixed();
	  match_height();
	  mybaron();
	  nav_position();
	});

	$(window).scroll(function(){
	  if ($(".js-set-absolute").length > 0){
	  	chat_fixed();
		}
	});
});