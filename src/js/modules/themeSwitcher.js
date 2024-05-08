const checkStorage = () => {
  if(localStorage.getItem('theme') === "dark") {
    return true;
  } else {
    return false;
  }
}

const lightTheme = (btnImg) => {
  btnImg.src = "./img/dark.png";
  btnImg.setAttribute("alt", "moon");
  document.body.classList.remove('dark-page');
}
const darkTheme = (btnImg) => {
  btnImg.src = "./img/light.png";
  btnImg.setAttribute("alt", "sun");
  document.body.classList.add('dark-page');
}

const themeSwitche = () => {
  const btn  = document.querySelector('.theme-switcher'),
  btnImg = btn.querySelector('img');
  let isDark = checkStorage();
  if(isDark) {
    darkTheme(btnImg);
  } else {
    lightTheme(btnImg);
  }
  btnImg.style.opacity = '1';
  btn.addEventListener('click', () => {
    if(isDark) {
      localStorage.setItem('theme', 'light');
      isDark = checkStorage();
      lightTheme(btnImg);
    } else {
      localStorage.setItem('theme', 'dark');
      isDark = checkStorage();
      darkTheme(btnImg);
    }
  })
}

export default themeSwitche;
