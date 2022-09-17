import '../libs/slick';

export default function slider() {
	let slickStarted = false;

	function slickInit() {
		const slides = $('.slick-slide').length > 0 ? $('.slick-slide') : $('.pricing__slider-slide');
		let margin = +slides.css('margin-right').replace(/[^0-9.]/g, '') + +slides.css('margin-left').replace(/\D/g, '');
		const necessaryWidth = (+slides.css('width').replace(/[^0-9.]/g, '') + margin) * slides.length;
		if (($( window ).width() >= necessaryWidth)) {
			slides.removeClass('pricing__slider-slide_active');
			slides.eq(1).addClass('pricing__slider-slide_active');
			$('.pricing__slider').addClass('pricing__slider_big');
			if (slickStarted) {
				$('.pricing__slider').slick('unslick');
				slickStarted = false;
			}
		} else if(!slickStarted) {
			$('.pricing__slider').removeClass('pricing__slider_big');
			$('.pricing__slider').slick({
				infinite: false,
				arrows: false,
				setPosition: 2,
				variableWidth: true,
				centerMode: true,
				mobileFirst: true,
				initialSlide: 1
			});
			slides.addClass('pricing__slider-slide_active');
			slickStarted = true;
		}
	}

	slickInit();

	$( window ).resize(function() {
		slickInit();
	});
}