import { obtenerUsuarioEnSesion, logout } from '/data/session.js';

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
    
  //obtener usuario en sesion
    const usuarioActivo = obtenerUsuarioEnSesion();
  
    // Importante para no perder nota.
    if (!usuarioActivo) {
        window.location.href = '/index/index.html';
        return;
    };
    
    const usuarioActivoNombre = document.querySelector('#usuarioActivo');
    usuarioActivoNombre.innerHTML = 'Bienvenido ' + usuarioActivo.correo ;

    const usuarioActivoNombreNombre = document.querySelector('#usuarioActivoNombreNombre');
    usuarioActivoNombreNombre.innerHTML = usuarioActivo.correo ;
    
    const cerrarSesion = document.querySelector('#cerrarSesion');
    cerrarSesion.addEventListener('click', () => {
        logout();
        window.location.href = '/index/index.html';
    });
  };
  document.addEventListener("DOMContentLoaded", render);