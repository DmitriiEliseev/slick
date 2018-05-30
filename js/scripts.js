$(document).ready(function(){
	$('.main_slick').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
		speed: 3000,
        autoplaySpeed: 2000,
		respondTo: 'min',
        pauseOnDotsHover: true,
		dots: true
    });
});

	 
