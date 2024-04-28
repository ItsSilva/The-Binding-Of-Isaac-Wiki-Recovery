import { obtenerData,  pagItems} from '../data/utils.js';

const render = async () => {

//class
const data = await obtenerData();

const sizeTextinfoCards = document.querySelector('.tableContainer__infoCards > tbody');

for (const achievement of data.pagItems){
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

};

document.addEventListener("DOMContentLoaded", render);