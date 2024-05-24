import { obtenerUsuarioEnSesion, logout, updateUserInfo as updateUserInfoInSession } from '/data/session.js';
import { reiniciarPaginaUnaVez } from '/data/utils.js';

const render = async () => {
  const reiniciarPagina = reiniciarPaginaUnaVez();
  reiniciarPagina();

  let subMenu = document.getElementById("subMenu");
  let profileButton = document.querySelector('.saveBottom__user-pic');

  if (profileButton) {
    profileButton.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    subMenu.classList.toggle("open-menu");
  }

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

  if (!usuarioActivo) {
    window.location.href = '/index/index.html';
    return;
  }

  const usuarioActivoNombre = document.querySelector('#usuarioActivo');
  usuarioActivoNombre.innerHTML = 'Bienvenido ' + usuarioActivo.correo;

  const usuarioActivoNombreNombre = document.querySelector('#usuarioActivoNombreNombre');
  usuarioActivoNombreNombre.innerHTML = usuarioActivo.correo;

  const cerrarSesion = document.querySelector('#cerrarSesion');
  cerrarSesion.addEventListener('click', () => {
    logout();
    window.location.href = '/index/index.html';
  });

  const updateUserInfo = async () => {
    const usuarioActivo = obtenerUsuarioEnSesion();
    if (!usuarioActivo) {
      window.location.href = '/index/index.html';
      return;
    }

    const emailInput = document.querySelector('.hero__input input[type="email"]');
    const passwordInput = document.querySelector('.hero__input input[type="password"]');

    let updatedInfo = {};
    let hasChanges = false;

    if (emailInput.value.trim() !== '' && emailInput.value.trim() !== usuarioActivo.correo) {
      updatedInfo.correo = emailInput.value.trim();
      hasChanges = true;
    }

    if (passwordInput.value.trim() !== '' && passwordInput.value.trim() !== usuarioActivo.contrasena) {
      updatedInfo.contrasena = passwordInput.value.trim();
      hasChanges = true;
    }

    if (!hasChanges) {
      alert('No se ha realizado ningún cambio en la información del usuario.');
      return;
    }

    try {
      await updateUserInfoInSession(updatedInfo);
      alert('Información de usuario actualizada exitosamente.');
      window.location.reload();
    } catch (error) {
      alert(`Error al actualizar la información del usuario: ${error.message}`);
    }
  };

  const changeButton = document.querySelector('.hero__primary-button');
  changeButton.addEventListener('click', updateUserInfo);
};

document.addEventListener("DOMContentLoaded", render);

window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('paginaReiniciada');
});
