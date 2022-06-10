import initSmoothScroll from './modules/scroll-suave.js'
import initScrollAnimation from  './modules/scroll-animacao.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tabnav.js'
import initModal from './modules/modal.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initAnimaNumeros from './modules/numeros.js'
import { Slide, SlideNav } from "./modules/slide.js";

initSmoothScroll();
initScrollAnimation();
initAccordion();
initTabNav();
initModal();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.addControl('.custom-controls')