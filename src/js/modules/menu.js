const btn = document.querySelector('.burger'),
      menuWrapper = document.querySelector('.header-menu__wrapper'),
      header = document.querySelector('.header'),
      itemsMenu = document.querySelectorAll('.header-menu__link');


const toggleBurger = () => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('close');
    menuWrapper.classList.toggle('open');
    header.classList.toggle('open');
    if(btn.classList.contains('close')) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  });
}



export const scrollPage = () => {
  const section = document.querySelector('.first-sc');
  let position = pageYOffset;
  section.style.paddingTop = `${header.offsetHeight}px`;
  if(pageYOffset >=1) {
    header.classList.add('bg');
  }
  window.addEventListener('scroll', () => {
    let newPosition = pageYOffset;
    if(newPosition > 100) {
      if(newPosition > position) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    } else {
      header.classList.remove('scroll');
    }
    if(pageYOffset >=2) {
      header.classList.add('bg');
      section.style.paddingTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('bg');
      section.style.paddingTop = `${header.offsetHeight}px`;
    }
    position = newPosition;
  });
}


export const toggleMenu = () => {
  itemsMenu.forEach(item => {
    item.addEventListener('click', () => {
      btn.classList.remove('close');
      menuWrapper.classList.remove('open');
      header.classList.remove('scroll');
      header.classList.remove('open');
      document.body.style.overflow = ""
    })
  })
}

export default toggleBurger;
