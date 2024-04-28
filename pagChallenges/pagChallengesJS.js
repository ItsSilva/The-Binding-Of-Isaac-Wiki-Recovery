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

};

document.addEventListener("DOMContentLoaded", render);