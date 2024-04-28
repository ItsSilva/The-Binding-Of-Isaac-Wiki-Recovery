// const data = await Response.json();
// const achievements = data.pageAchievements;
// const bosses = data.pageBosses;

export const obtenerData = async () => {
  const response = await fetch("../data/data.json");
  const data = await response.json();
  return data;
};

export class PageAchievements {
  #id;
  image;
  name;
  description;
  unlock;
  secretNumber;
  #nodo;

  constructor(id, image, name, description, unlock, secretNumber, nodo) {
    this.#id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.unlock = unlock;
    this.secretNumber = secretNumber;
    this.#nodo = nodo;
  }

  render() { // Renderizar en la tabla PageAchievements
    const tr2 = document.createElement("tr");

    // Creación de td
    const td1 = document.createElement("td");
    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.name;
    td1.appendChild(img);

    const td2 = document.createElement("td");
    td2.textContent = this.name;

    const td3 = document.createElement("td");
    td3.textContent = this.description;

    const td4 = document.createElement("td");
    td4.textContent = this.unlock;

    const td5 = document.createElement("td");
    td5.textContent = this.secretNumber;

    const td6 = document.createElement("td");
    const aClass = document.createElement("a");
    aClass.classList.add("tableContainer__infoCards--savecolor");
    const iClass = document.createElement("i");
    iClass.classList.add("fa-solid", "fa-bookmark", "fa-2x");
    aClass.appendChild(iClass);
    td6.appendChild(aClass);

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);

    return tr2;
  }
}

export class PagBosses {
  #id;
  image;
  name;
  description;
  behavior01;
  behavior02;
  behavior03;
  #nodo;

  constructor(id, image, name, description, behavior01, behavior02, behavior03, nodo) {
    this.#id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.behavior01 = behavior01;
    this.behavior02 = behavior02;
    this.behavior03 = behavior03;
    this.#nodo = nodo;
  }

  render() { // Renderizar en la tabla PageBosses
    const tr2 = document.createElement("tr");

    const td1 = document.createElement("td");
    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.name;
    td1.appendChild(img);

    const td2 = document.createElement("td");
    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    td2.appendChild(h2);

    const td3 = document.createElement("td");
    const p = document.createElement("p");
    p.textContent = this.description;
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.textContent = this.behavior01;
    const li2 = document.createElement("li");
    li2.textContent = this.behavior02;
    const li3 = document.createElement("li");
    li3.textContent = this.behavior03;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    td3.appendChild(p);
    td3.appendChild(ul);

    const td4 = document.createElement("td");
    const aClass = document.createElement("a");
    aClass.classList.add("tableContainer__infoCards--savecolor");
    const iClass = document.createElement("i");
    iClass.classList.add("fa-solid", "fa-bookmark", "fa-2x");
    aClass.appendChild(iClass);
    td4.appendChild(aClass);

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);

    return tr2;
  }
}

export class pagChallenges{
  #id;
  name;
  character;
  condition1;
  condition2;
  treasureRoom;
  shopRoom;
  goal;
  unlockedBy;
  collapseUnlocks;
  #nodo;
  
  constructor (id, name, character, condition1, condition2, treasureRoom, shopRoom, goal, unlockedBy, collapseUnlocks, nodo){
    this.#id = id;
    this.name = name;
    this.character = character;
    this.condition1 = condition1;
    this.condition2 = condition2;
    this.treasureRoom = treasureRoom;
    this.shopRoom = shopRoom;
    this.goal = goal;
    this.unlockedBy = unlockedBy;
    this.collapseUnlocks = collapseUnlocks;
    this.#nodo = nodo;
  }

  render(){
    const tr2 = document.createElement("tr");

    const td1 = document.createElement("td");
    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    td1.appendChild(h2);

    const td2 = document.createElement("td");
    const img = document.createElement("img");
    img.src = this.character;
    img.alt = this.name;
    td2.appendChild(img);

    const td3 = document.createElement("td");
    const ul1 = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.textContent = this.condition1;
    const li2 = document.createElement("li");
    li2.textContent = this.condition2;
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    td3.appendChild(ul1);

    const td4 = document.createElement("td");
    const ul2 = document.createElement("ul");
    const li3 = document.createElement("li");
    li3.textContent = this.treasureRoom;
    const li4 = document.createElement("li");
    li4.textContent = this.shopRoom;
    ul2.appendChild(li3);
    ul2.appendChild(li4);
    td4.appendChild(ul2);

    const td5 = document.createElement("td");
    const img2 = document.createElement("img");
    img2.src = this.goal;
    img2.alt = this.name;
    td5.appendChild(img2);

    const td6 = document.createElement("td");
    const p = document.createElement("p");
    p.textContent = this.unlockedBy;
    td6.appendChild(p);

    const td7 = document.createElement("td");
    const p1 = document.createElement("p");
    p1.textContent = this.collapseUnlocks;
    td7.appendChild(p1);

    const td8 = document.createElement("td");
    const aClass = document.createElement("a");
    aClass.classList.add("tableContainer__infoCards--savecolor");
    const iClass = document.createElement("i");
    iClass.classList.add("fa-solid", "fa-bookmark", "fa-2x");
    aClass.appendChild(iClass);
    td8.appendChild(aClass);

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);

    return tr2;
  }
}

export class pagItems{
  #id
  name;
  itemID;
  icon;
  quote;
  description;
  quality;
  #nodo

  constructor(id, name, itemID, icon, quote, description, quality, nodo){
    this.#id = id;
    this.name = name;
    this.itemID = itemID;
    this.icon = icon;
    this.quote = quote;
    this.description = description;
    this.quality = quality;
    this.#nodo = nodo;
  }

  render (){
    const tr2 = document.createElement("tr");

    const td1 = document.createElement("td");
    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    td1.appendChild(h2);

    const td2 = document.createElement("td");
    const p1 = document.createElement("p");
    p1.textContent = this.itemID;
    td2.appendChild(p1);

    const td3 = document.createElement("td");
    const img = document.createElement("img");
    img.src = this.icon;
    img.alt = this.name;
    td3.appendChild(img);

    const td4 = document.createElement("td");
    const p2 = document.createElement("p");
    p2.textContent = this.quote;
    td4.appendChild(p2);

    const td5 = document.createElement("td");
    const p3 = document.createElement("p");
    p3.textContent = this.description;
    td5.appendChild(p3);

    const td6 = document.createElement("td");
    const p4 = document.createElement("p");
    p4.textContent = this.quality;
    td6.appendChild(p4);

    const td7 = document.createElement("td");
    const aClass = document.createElement("a");
    aClass.classList.add("tableContainer__infoCards--savecolor");
    const iClass = document.createElement("i");
    iClass.classList.add("fa-solid", "fa-bookmark", "fa-2x");
    aClass.appendChild(iClass);
    td7.appendChild(aClass);

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);

    return tr2;
  }
}
export class pagMonsters{
    #id;
    entity;
    name;
    idEntity;
    description;
    #nodo

    constructor(id, entity, name, idEntity, description, nodo){
        this.#id = id;
        this.entity = entity;
        this.name = name;
        this.idEntity = idEntity;
        this.description = description;
        this.#nodo = nodo;
    }
    render(){
    const tr2 = document.createElement("tr");

      const td1 = document.createElement("td");
      const img = document.createElement("img");
      img.src = this.entity;
      img.alt = this.name;
      td1.appendChild(img);

      const td2 = document.createElement("td");
      const h2 = document.createElement("h2");
      h2.textContent = this.name;
      td2.appendChild(h2);

      const td3 = document.createElement("td");
      const p1 = document.createElement("p");
      p1.textContent = this.idEntity;
      td3.appendChild(p1);

      const td4 = document.createElement("td");
      const p2 = document.createElement("p");
      p2.textContent = this.description;
      td4.appendChild(p2);

      const td5 = document.createElement("td");
      const aClass = document.createElement("a");
      aClass.classList.add("tableContainer__infoCards--savecolor");
      const iClass = document.createElement("i");
      iClass.classList.add("fa-solid", "fa-bookmark", "fa-2x");
      aClass.appendChild(iClass);
      td5.appendChild(aClass);      

      tr2.appendChild(td1);
      tr2.appendChild(td2);
      tr2.appendChild(td3);
      tr2.appendChild(td4);
      tr2.appendChild(td5);

    return tr2;
    }
}