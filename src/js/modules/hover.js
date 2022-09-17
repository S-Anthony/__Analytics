export default function hover () {
	function changeSlides(event) {
		if (event.target.closest('.pricing__slider_big')) {
			$('.pricing__slider-slide').removeClass('pricing__slider-slide_active');
			$(event.target).closest('.pricing__slider-slide').addClass('pricing__slider-slide_active');
		}
	}
	$('.pricing__slider-slide').on( "mouseenter", changeSlides);
	$( window ).resize(function() {
		$('.pricing__slider-slide').off( "mouseenter", changeSlides);
		$('.pricing__slider-slide').on( "mouseenter", changeSlides);
	});
}