import { obtenerData,  pagChallenges} from '../data/utils.js';

const render = async () => {

//class
const data = await obtenerData();

const sizeTextinfoCards = document.querySelector('.tableContainer__infoCards > tbody');

for (const achievement of data.pagChallenges){
  const pageAchievements = new pagChallenges(
    achievement.id,
    achievement.name, 
    achievement.character, 
    achievement.condition1, 
    achievement.condition2,
    achievement.treasureRoom, 
    achievement.shopRoom,
    achievement.goal,
    achievement.unlockedBy,
    achievement.collapseUnlocks
    );
  const pageAchievementsRender = pageAchievements.render();

  sizeTextinfoCards.appendChild(pageAchievementsRender);
}

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
  // savecolor
};

render();
