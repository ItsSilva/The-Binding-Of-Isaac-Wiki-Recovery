import { obtenerData,  PagBosses, reiniciarPaginaUnaVez} from '../data/utils.js';
import { obtenerUsuarioEnSesion, logout } from '/data/session.js';

const render = async () => {
  const reiniciarPagina = reiniciarPaginaUnaVez();
reiniciarPagina();
//class
const data = await obtenerData();

const sizeTextinfoCards = document.querySelector('.tableContainer__infoCards > tbody');

for (const achievement of data.pagBosses){
  const pageAchievements = new PagBosses(
    achievement.id,
    achievement.image, 
    achievement.name, achievement.description, 
    achievement.behavior01,
    achievement.behavior02, 
    achievement.behavior03
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
    const name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
    const behavior = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
    if (name.includes(searchTerm) || behavior.includes(searchTerm)) {
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
// Eliminar el item de sessionStorage cuando el usuario abandone la página
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('paginaReiniciada');
});