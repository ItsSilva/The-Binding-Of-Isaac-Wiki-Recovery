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

};

document.addEventListener("DOMContentLoaded", render);