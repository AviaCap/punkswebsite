import themeSwitche from "./modules/themeSwitcher";
import toggleBurger, {scrollPage, toggleMenu} from "./modules/menu"

document.addEventListener("DOMContentLoaded", () => {
  themeSwitche();
  toggleBurger();
  scrollPage();
  toggleMenu();
})
