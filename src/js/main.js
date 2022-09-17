import './libs/jquery-3.6.1.min';
import './libs/jquery-migrate-3.4.0.min';
import AOS from 'aos';
import mobileMenu from './modules/mobile_menu';
import slider from './modules/slider';
import hover from './modules/hover';

$(function() {
	AOS.init();
	mobileMenu();
	slider();
	hover();
});