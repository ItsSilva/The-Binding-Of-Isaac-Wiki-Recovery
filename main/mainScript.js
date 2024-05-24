import { obtenerUsuarioEnSesion, logout } from '/data/session.js';
import { reiniciarPaginaUnaVez } from '/data/utils.js';
const render = async () => {
  const reiniciarPagina = reiniciarPaginaUnaVez();
reiniciarPagina();
  // Drop-down Profile
  let subMenu = document.getElementById("subMenu");
  let profileButton = document.querySelector('.saveBottom__user-pic');

  if (profileButton) {
    profileButton.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    subMenu.classList.toggle("open-menu");
  }

  // savecolor
  let saveColors = document.querySelectorAll(".tableContainer__infoCards--savecolor");

  function toggleClass(element, text) {
    element.classList.toggle(text);
  }

  saveColors.forEach(function(saveColor) {
    saveColor.addEventListener("click", function() {
      toggleClass(this, "active");
    });
  });

$('.owl-carousel.main').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
const usuarioActivo = obtenerUsuarioEnSesion();

// Importante para no perder nota.
if (!usuarioActivo) {
    window.location.href = '/index/index.html';
    return;
};

const usuarioActivoNombre = document.querySelector('#usuarioActivo');
usuarioActivoNombre.innerHTML = 'Bienvenido ' + usuarioActivo.correo ;

const cerrarSesion = document.querySelector('#cerrarSesion');
cerrarSesion.addEventListener('click', () => {
    logout();
    window.location.href = '/index/index.html';
});

};
document.addEventListener("DOMContentLoaded", render);

// Eliminar el item de sessionStorage cuando el usuario abandone la página
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('paginaReiniciada');
});
