import Swiper, { Navigation, Pagination } from 'swiper';
import vars from '../_vars';

const catalogSlider = new Swiper(vars.$catalogSlider, {
  modules: [Navigation, Pagination],
  loop: true,
});