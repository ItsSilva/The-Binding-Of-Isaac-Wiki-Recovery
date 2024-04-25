import { obtenerData,  PageAchievements} from '../data/utils.js';

const render = async () => {

// Drop-down Profile
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
};
// Drop-down Profile

// savecolor
let saveColors = document.querySelectorAll(".tableContainer__infoCards--savecolor");

function toggleClass(element, text) {
  element.classList.toggle(text);
}

saveColors.forEach(function(saveColor) {
  saveColor.addEventListener("click", function() {
    toggleClass(saveColor, "active");
  });
});
// savecolor

//class
const achievements = await obtenerData();
console.log(achievements);

const sizeTextinfoCards = document.querySelector('.sizeTextinfoCards');

for (const achievement of achievements){
  const pageAchievements = new PageAchievements(achievement.id, achievement.image, achievement.name, achievement.description, achievement.unlock, achievement.secretNumber);
  const pageAchievementsRender = pageAchievements.render();

  sizeTextinfoCards.appendChild(pageAchievementsRender);
}

};

document.addEventListener("DOMContentLoaded", render);