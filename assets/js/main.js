// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

/* const swiper = new Swiper(...); */

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    direction: 'vertical',
    loop: true,
});

/* const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext(); */