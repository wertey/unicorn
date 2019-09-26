// JS
import './js/'
import 'jquery';
import 'slick-carousel'

// SCSS
import './assets/scss/core.scss'
import $ from "jquery";
require('slick-carousel/slick/slick.scss');
require('font-awesome/css/font-awesome.css');
require('slick-carousel/slick/slick-theme.scss');
require('slick-carousel/slick/slick-theme.scss');


$('.lp-feature-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '20px',
    dotsClass: 'slick-dots lp-feature-slider__dots',
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '20px',
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        ]
});

$('.lp-clients-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 374,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: false,
                arrow: false,
            }
        },
    ]
});

$('.lp-slider-row').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },
    ]
});

$('.lp-portfolio__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    dotsClass: 'slick-dots lp-portfolio__slider-dots',
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 374,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: false,
                arrow: false,
            }
        },
    ]
});

