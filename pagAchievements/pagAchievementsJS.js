import { obtenerUsuarioEnSesion, logout } from '/data/session.js';
import { obtenerData,  PageAchievements} from '../data/utils.js';

const render = async () => {

//class
const data = await obtenerData();

const sizeTextinfoCards = document.querySelector('.tableContainer__infoCards > tbody');

for (const achievement of data.pagAchievement){
  const pageAchievements = new PageAchievements(achievement.id, achievement.image, achievement.name, achievement.description, achievement.unlock, achievement.secretNumber);
  const pageAchievementsRender = pageAchievements.render();

  sizeTextinfoCards.appendChild(pageAchievementsRender);
}

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
