import { obtenerUsuarioEnSesion, logout } from '/data/session.js';
import { cargarFavoritosEnTabla, reiniciarPaginaUnaVez } from '../data/utils.js';

// Función de búsqueda
const applySearchFunction = () => {
  const reiniciarPagina = reiniciarPaginaUnaVez();
reiniciarPagina();

  const searchInput = document.querySelector('.search-input');
  const tbody = document.querySelector('#tableContainer__infoCards tbody');

  if (searchInput && tbody) {
    console.log('searchInput and tbody found, applying search function.');
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
      const rows = tbody.querySelectorAll('tr');
      rows.forEach(function (row) {
        const cells = Array.from(row.querySelectorAll('td')).map(td => td.textContent.toLowerCase());
        const match = cells.some(cell => cell.includes(searchTerm));
        row.style.display = match ? 'table-row' : 'none';
      });
    });
  } else {
    console.error('searchInput or tbody is null.');
  }
};

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

  const usuarioActivo = obtenerUsuarioEnSesion();

  // Importante para no perder nota.
  if (!usuarioActivo) {
    window.location.href = '/index/index.html';
    return;
  }

  const usuarioActivoNombre = document.querySelector('#usuarioActivo');
  usuarioActivoNombre.innerHTML = 'Bienvenido ' + usuarioActivo.correo;

  const cerrarSesion = document.querySelector('#cerrarSesion');
  cerrarSesion.addEventListener('click', () => {
    logout();
    window.location.href = '/index/index.html';
  });

  // Llamar a la función para cargar los favoritos en la tabla y esperar a que se complete
  await cargarFavoritosEnTabla();

  // Asegurarse de que los elementos necesarios existen antes de llamar a applySearchFunction
  console.log('Calling applySearchFunction...');
  applySearchFunction();

  // savecolor
  let saveColors = document.querySelectorAll(".tableContainer__infoCards--savecolor");

  function toggleClass(element, text) {
    element.classList.toggle(text);
  }

  saveColors.forEach(function (saveColor) {
    saveColor.addEventListener("click", function () {
      toggleClass(this, "active");
    });
  });
};

document.addEventListener("DOMContentLoaded", render);
