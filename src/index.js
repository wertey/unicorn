// JS
import './js/'
import 'jquery';
import 'slick-carousel'

// SCSS
import './assets/scss/core.scss'
import $ from "jquery";
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');


$('.lp-feature-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '20px'
});

$('.lp-clients-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: '40px'
});
