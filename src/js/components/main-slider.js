import Swiper, { Navigation, Pagination } from 'swiper';
import vars from '../_vars';

const bannerSlider = new Swiper(vars.$bannerSlider, {
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'banner-pag__bullet',
  },
});