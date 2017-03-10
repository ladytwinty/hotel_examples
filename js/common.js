$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		nav: true,
		loop: true,
		margin: 20,
		dots: false,
        smartSpeed: 1000,
        responsiveClass: true,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:3
        }
    }
	});




});