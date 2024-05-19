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
  usuarioActivoNombre.innerHTML = 'Bienvenido ' + usuarioActivo.correo ;

  const usuarioActivoNombreNombre = document.querySelector('#usuarioActivoNombreNombre');
  usuarioActivoNombreNombre.innerHTML = usuarioActivo.correo ;

  const cerrarSesion = document.querySelector('#cerrarSesion');
  cerrarSesion.addEventListener('click', () => {
    logout();
    window.location.href = '/index/index.html';
  });

  // Función para actualizar la información del usuario
  const updateUserInfo = async (type) => {
    const usuarioActivo = obtenerUsuarioEnSesion();
    if (!usuarioActivo) {
      window.location.href = '/index/index.html';
      return;
    }

    let newValue;
    if (type === 'email') {
      newValue = document.querySelector('.hero__input input[type="email"]').value.trim();
    } else {
      newValue = document.querySelector('.hero__input input[type="password"]').value.trim();
    }

    // Verificar si el campo está vacío
    if (newValue === '') {
      alert('No se puede enviar información vacía.');
      return;
    }

    try {
      const updatedInfo = {};

      // Actualizar correo o contraseña según el tipo
      if (type === 'email' && newValue !== usuarioActivo.correo) {
        updatedInfo.correo = newValue;
      } else if (type === 'password' && newValue !== usuarioActivo.contrasena) {
        updatedInfo.contrasena = newValue;
      }

      // Validar si hay cambios para actualizar
      if (Object.keys(updatedInfo).length > 0) {
        await import('/data/session.js').then(async (module) => {
          await module.updateUserInfo(updatedInfo);
          alert('Información de usuario actualizada exitosamente.');
          await render(); // Recargar la página después de actualizar la información
        });
      } else {
        alert('No se ha realizado ningún cambio en la información del usuario.');
      }
    } catch (error) {
      alert(`Error al actualizar la información del usuario: ${error.message}`);
    }
  };

  // Agregar evento de clic al botón "Change"
  const changeEmailButton = document.querySelector('.hero__primary-button--gmail');
  changeEmailButton.addEventListener('click', () => updateUserInfo('email'));

  const changePasswordButton = document.querySelector('.hero__primary-button--password');
  changePasswordButton.addEventListener('click', () => updateUserInfo('password'));
};

document.addEventListener("DOMContentLoaded", render);
