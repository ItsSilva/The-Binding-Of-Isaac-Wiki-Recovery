import { obtenerData,  PageAchievements} from '../data/utils.js';

const render = async () => {

//class
const achievements = await obtenerData();
console.log(achievements);

const sizeTextinfoCards = document.querySelector('.tableContainer');

for (const achievement of achievements){
  const pageAchievements = new PageAchievements(achievement.id, achievement.image, achievement.name, achievement.description, achievement.unlock, achievement.secretNumber);
  const pageAchievementsRender = pageAchievements.render();

  sizeTextinfoCards.appendChild(pageAchievementsRender);
}

};

document.addEventListener("DOMContentLoaded", render);