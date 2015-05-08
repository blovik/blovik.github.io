$(document).ready(function(){


	$(".toggle-content").hide();
    $(".toggle-title").on('click', function() {
        $(this).next(".toggle-content").slideToggle("normal");
        $(this).toggleClass('active');
    });

    $('.card').mouseover(function() {
    current_src = $(this).attr("src");
    $(this).attr("src", "img/businessCardFJR.png");
	});

	$('.card').mouseout(function() {
	    $(this).attr("src", "img/businessCardfjr.jpg");
	});

	$('.content').mouseover(function(){
		$(this).find('span.highlight').fadeIn(5000, function () {
			$(this).css({"background-color": "#F3FF03", "border-radius": "50%"});})
	});

	$('.content').mouseout(function(){
		$(this).find('span.highlight').css("background-color", "#ffffff");
	});

	$('.hire').mouseover(function(){
		$(this).find("greatDecision").replaceWith("Hire Brian");
	});

	$(".rideBtn").on('click', function () {
	$("#ride").show("slow");
	$("#pictures").hide("slow");
	$("#contact").hide("slow");
	$("#follow").hide("slow");
	$("#join").hide("slow");
	$("#calendar").hide("slow");
	});

	$("#picturesBtn").on('click', function () {
	$("#ride").hide("slow");
	$("#pictures").show("slow");
	$("#contact").hide("slow");
	$("#follow").hide("slow");
	$("#join").hide("slow");
	$("#calendar").hide("slow");
	});

	$("#contactBtn").on('click', function () {
	$("#ride").hide("slow");
	$("#pictures").hide("slow");
	$("#contact").show("slow");
	$("#follow").hide("slow");
	$("#join").hide("slow");
	$("#calendar").hide("slow");
	});

	$("#followBtn").on('click', function () {
	$("#ride").hide("slow");
	$("#pictures").hide("slow");
	$("#contact").hide("slow");
	$("#follow").show("slow");
	$("#join").hide("slow");
	$("#calendar").hide("slow");
	});

	$("#joinBtn").on('click', function () {
	$("#ride").hide("slow");
	$("#pictures").hide("slow");
	$("#contact").hide("slow");
	$("#follow").hide("slow");
	$("#join").show("slow");
	$("#calendar").hide("slow");
	});

	$("#calendarBtn").on('click', function () {
	$("#ride").hide("slow");
	$("#pictures").hide("slow");
	$("#contact").hide("slow");
	$("#follow").hide("slow");
	$("#join").hide("slow");
	$("#calendar").show("slow");
	});

// test slideshow
	jQuery(document).foundation({
	  orbit: {
	    animation: 'slide',
	    timer_speed: 3000,
	    pause_on_hover: true,
	    animation_speed: 500,
	    navigation_arrows: true,
	    bullets: false,
	    slide_number: false
	  }
	});


	// @media #{$small-only} { 
	// $base-font-size: 150%;
	// }






});