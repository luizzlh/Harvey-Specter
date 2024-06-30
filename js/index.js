const hamburger = document.querySelector('.hamburger');
const navbarItens = document.querySelector('.navbar-itens');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   navbarItens.classList.toggle('active');
});