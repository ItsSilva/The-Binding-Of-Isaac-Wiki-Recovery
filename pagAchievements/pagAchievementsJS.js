import { obtenerUsuarioEnSesion, logout } from "/data/session.js";
import { obtenerData, PageAchievements, reiniciarPaginaUnaVez } from "../data/utils.js";

const render = async () => {
  const reiniciarPagina = reiniciarPaginaUnaVez();
reiniciarPagina();
  
  //class
  const data = await obtenerData();

  const sizeTextinfoCards = document.querySelector(
    ".tableContainer__infoCards > tbody"
  );

  for (const achievement of data.pagAchievement) {
    const pageAchievements = new PageAchievements(
      achievement.id,
      achievement.image,
      achievement.name,
      achievement.description,
      achievement.unlock,
      achievement.secretNumber
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
    const name = row.querySelector('td:nth-child(2)').textContent.toLowerCase(),
      description = row.querySelector('td:nth-child(3)').textContent.toLowerCase(),
      unlock = row.querySelector('td:nth-child(4)').textContent.toLowerCase(),
      secretNumber = row.querySelector('td:nth-child(5)').textContent.toLowerCase();
    if (name.includes(searchTerm) || description.includes(searchTerm) || unlock.includes(searchTerm) || secretNumber.includes(searchTerm)) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
});

  // Drop-down Profile
  let subMenu = document.getElementById("subMenu");
  let profileButton = document.querySelector(".user-pic");

  if (profileButton) {
    profileButton.addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    subMenu.classList.toggle("open-menu");
  }

  // savecolor
  let saveColors = document.querySelectorAll(
    ".tableContainer__infoCards--savecolor"
  );

  function toggleClass(element, text) {
    element.classList.toggle(text);
  }

  saveColors.forEach(function (saveColor) {
    saveColor.addEventListener("click", function () {
      toggleClass(this, "active");
    });
  });
  // savecolor
  const usuarioActivo = obtenerUsuarioEnSesion();

  // Importante para no perder nota.
  if (!usuarioActivo) {
    window.location.href = "/index/index.html";
    return;
  }

  const usuarioActivoNombre = document.querySelector("#usuarioActivo");
  usuarioActivoNombre.innerHTML = "Bienvenido " + usuarioActivo.correo;

  const cerrarSesion = document.querySelector("#cerrarSesion");
  cerrarSesion.addEventListener("click", () => {
    logout();
    window.location.href = "/index/index.html";
  });
};

render();

// Eliminar el item de sessionStorage cuando el usuario abandone la página
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('paginaReiniciada');
});

