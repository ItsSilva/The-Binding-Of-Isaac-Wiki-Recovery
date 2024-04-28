import { obtenerData,  PagBosses} from '../data/utils.js';

const render = async () => {

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

};

document.addEventListener("DOMContentLoaded", render);