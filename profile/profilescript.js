import { obtenerUsuarioEnSesion, logout, updateUserInfo } from '/data/session.js';

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

  // Obtener usuario en sesión
  const usuarioActivo = obtenerUsuarioEnSesion();

  // Importante para no perder nota.
  if (!usuarioActivo) {
    window.location.href = '/index/index.html';
    return;
  };

  const usuarioActivoNombre = document.querySelector('#usuarioActivo');
  usuarioActivoNombre.innerHTML = 'Bienvenido ' + usuarioActivo.correo;

  const usuarioActivoNombreNombre = document.querySelector('#usuarioActivoNombreNombre');
  usuarioActivoNombreNombre.innerHTML = usuarioActivo.correo;

  const cerrarSesion = document.querySelector('#cerrarSesion');
  cerrarSesion.addEventListener('click', () => {
    logout();
    window.location.href = '/index/index.html';
  });

  // Función para actualizar la información del usuario
  const updateUserInfo = async () => {
    const usuarioActivo = obtenerUsuarioEnSesion();
    if (!usuarioActivo) {
      window.location.href = '/index/index.html';
      return;
    }

    const emailInput = document.querySelector('.hero__input input[type="email"]');
    const passwordInput = document.querySelector('.hero__input input[type="password"]');

    // Verificar si los campos están vacíos
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
      await import('/data/session.js').then(async (module) => {
        await module.updateUserInfo(updatedInfo);
        alert('Información de usuario actualizada exitosamente.');
        window.location.reload(); // Recargar la página después de actualizar la información
      });
    } catch (error) {
      alert(`Error al actualizar la información del usuario: ${error.message}`);
    }
  };

  // Agregar evento de clic al botón "Change"
  const changeButton = document.querySelector('.hero__primary-button');
  changeButton.addEventListener('click', updateUserInfo);
};

document.addEventListener("DOMContentLoaded", render);