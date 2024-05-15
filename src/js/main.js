import themeSwitche from "./modules/themeSwitcher";
import toggleBurger, {scrollPage, toggleMenu} from "./modules/menu"

document.addEventListener("DOMContentLoaded", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  themeSwitche();
  toggleBurger();
  scrollPage();
  toggleMenu();
})
