const openmenu = document.querySelector("#openmenu");
const closemenu = document.querySelector("#closemenu");

const menuinicio = document.querySelector("#inicioo");
const menuservicos = document.querySelector("#servicoss");
const menuprojetos = document.querySelector("#projetoss");
const menuskills = document.querySelector("#skillss");
const menuaprendizado = document.querySelector("#aprendizadoo");
const menucontato = document.querySelector("#contatoo");
const menucontrateme = document.querySelector("#contatobtn");

menuinicio.addEventListener('click', () => {
  menuservicos.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuskills.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menucontato.classList.remove('active');
  menuinicio.classList.add('active');
  
  closemenu.removeAttribute('style');
  openmenu.removeAttribute('style');
  navbar.removeAttribute('style');
})

menuservicos.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuskills.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menucontato.classList.remove('active');
  menuservicos.classList.add('active');

  closemenu.removeAttribute('style');
  openmenu.removeAttribute('style');
  navbar.removeAttribute('style');
})

menuprojetos.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuservicos.classList.remove('active');
  menuskills.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menucontato.classList.remove('active');
  menuprojetos.classList.add('active');

  closemenu.removeAttribute('style');
  openmenu.removeAttribute('style');
  navbar.removeAttribute('style');
})

menuskills.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuservicos.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menucontato.classList.remove('active');
  menuskills.classList.add('active');

  closemenu.removeAttribute('style');
  openmenu.removeAttribute('style');
  navbar.removeAttribute('style');
})


menuaprendizado.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuskills.classList.remove('active');
  menuservicos.classList.remove('active');
  menucontato.classList.remove('active');
  menuaprendizado.classList.add('active');

  closemenu.removeAttribute('style');
  openmenu.removeAttribute('style');
  navbar.removeAttribute('style');
})

menucontato.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuservicos.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menuskills.classList.remove('active');
  menucontato.classList.add('active');

  closemenu.removeAttribute('style');
  openmenu.removeAttribute('style');
  navbar.removeAttribute('style');
})

menucontrateme.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuservicos.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menuskills.classList.remove('active');
  menucontato.classList.add('active');
})

openmenu.addEventListener('click', () => {
  navbar.style.display = 'flex';
  openmenu.style.display = 'none';
  closemenu.style.display = 'flex';
  
  setTimeout(() => {
    navbar.style.opacity = '1';
  }, 10)
})

closemenu.addEventListener('click', () => {
  closemenu.removeAttribute('style');

  setTimeout(() => {
    openmenu.removeAttribute('style');
    navbar.removeAttribute('style');
  }, 200)
})