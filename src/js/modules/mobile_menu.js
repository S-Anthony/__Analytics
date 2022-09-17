export default function mobileMenu() {
	let menuOpened = false;

	function closeMenu () {
		$('.header__open-menu').removeClass('active');
		$('.header__open-menu').addClass('not-active');
		$('.header').removeClass('header_mobile-opened');
		$('.header').css({paddingRight: '0'});
		$('body').css({overflow: 'auto', paddingRight: '0'});
		menuOpened = false;
	}

	function openMenu () {
		$('.header__open-menu').removeClass('not-active');
		$('.header__open-menu').addClass('active');
		$('.header').addClass('header_mobile-opened');
		let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		$('.header').css({paddingRight: `${scrollbarWidth}px`});
		$('body').css({overflow: 'hidden', paddingRight: `${scrollbarWidth}px`});
		menuOpened = true;
	}

	$('.header__menu').on('click', function(event) {
		if (event.target.closest('.header__menu-item') && menuOpened) {
			closeMenu();
		}
	});

	$('.header__open-menu').on('click', function() {
		if (menuOpened) {
			closeMenu();
		} else {
			openMenu();
		}

		$( window ).resize(function() {
			closeMenu();
		});
	});
}