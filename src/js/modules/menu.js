const btn = document.querySelector('.burger'),
      menuWrapper = document.querySelector('.header-menu__wrapper'),
      header = document.querySelector('.header'),
      itemsMenu = document.querySelectorAll('.header-menu__link');


const toggleBurger = () => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('close');
    menuWrapper.classList.toggle('open');
    if(btn.classList.contains('close')) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  });
}



export const scrollPage = () => {
  let position = pageYOffset;
  window.addEventListener('scroll', () => {
    let newPosition = pageYOffset;
    if(newPosition > position) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
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
      document.body.style.overflow = ""
    })
  })
}

export default toggleBurger;
