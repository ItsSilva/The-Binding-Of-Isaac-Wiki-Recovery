import { obtenerUsuarioEnSesion, logout } from '/data/session.js';
import { obtenerData, pagItems, getActiveUserID, getUsuariosFromLocalStorage, cargarFavoritosEnTabla } from '../data/utils.js';

// Drop-down Profile
const render = async () => {

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

  // Llamar a la función para cargar los favoritos en la tabla
  cargarFavoritosEnTabla();
};

document.addEventListener("DOMContentLoaded", render);
