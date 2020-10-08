document.querySelector('.hamburger').onclick = function(){
  document.querySelector('.hamburger-icon').classList.toggle('hamburger-icon-active');
  document.querySelector('.menu-hidden__list').classList.toggle('menu-hidden__list-active');
}