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
    fade: true,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
});
