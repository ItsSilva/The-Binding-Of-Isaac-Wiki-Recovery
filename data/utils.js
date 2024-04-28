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

