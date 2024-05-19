import { obtenerData, pagItems } from '../data/utils.js';
import { obtenerUsuarioEnSesion, logout } from '/data/session.js';

const render = async () => {
  // class
  const data = await obtenerData();

  const sizeTextinfoCards = document.querySelector('.tableContainer__infoCards > tbody');

  for (const achievement of data.pagItems) {
    const pageAchievements = new pagItems(
      achievement.id,
      achievement.name,
      achievement.itemID,
      achievement.icon,
      achievement.quote,
      achievement.description,
      achievement.quality
    );
    const pageAchievementsRender = pageAchievements.render();

    sizeTextinfoCards.appendChild(pageAchievementsRender);
  }
// Función de búsqueda
const searchInput = document.querySelector('.search-input');
const searchRows = document.querySelectorAll('.tableContainer__infoCards tbody tr');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  searchRows.forEach(function(row) {
    const name = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
    const ID = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
    const quote = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
    const description = row.querySelector('td:nth-child(5)').textContent.toLowerCase();
    const quality = row.querySelector('td:nth-child(6)').textContent.toLowerCase();
    if (name.includes(searchTerm) || ID.includes(searchTerm) || quote.includes(searchTerm) || description.includes(searchTerm) || quality.includes(searchTerm)) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
});
  // Drop-down Profile
  let subMenu = document.getElementById("subMenu");
  let profileButton = document.querySelector('.user-pic');

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
  // savecolor
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

render();
