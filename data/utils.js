// const data = await Response.json();
// const achievements = data.pageAchievements;
// const bosses = data.pageBosses;

export const obtenerData = async () => {

    const response = await fetch("../data/data.json");
    const data = await response.json();
    return data;

  };

  export class PageAchievements{
    #id;
    image;
    name;
    description;
    unlock;
    secretNumbre;
    #nodo;

    constructor (id, image, name, description, unlock, secretNumber, nodo){
        this.#id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.unlock = unlock;
        this.secretNumber = secretNumber;
        this.#nodo = nodo;
    };
    render (){
        // Contenedor de tabla
        const tableContainer = document.createElement("div");
        tableContainer.classList.add("tableContainer");

        // Creacion de tabla
        const tableContainer__infoCards = document.createElement("table");
        tableContainer__infoCards.classList.add("tableContainer__infoCards");
        tableContainer.appendChild(tableContainer__infoCards);

        // Creacion de thead
        const thead = document.createElement("thead");
        tableContainer__infoCards.appendChild(thead);

        // Creacion de tr1
        const tr1 = document.createElement("tr");
        thead.appendChild(tr1);

        // Creacion de th
        const th1 = document.createElement("th");
        th1.textContent = "Image";

        const th2 = document.createElement("th");
        th2.textContent = "Name";

        const th3 = document.createElement("th");
        th3.textContent = "Description";

        const th4 = document.createElement("th");
        th4.textContent = "Unlock";

        const th5 = document.createElement("th");
        th5.textContent = "Secret Number";

        const th6 = document.createElement("th");
        th6.textContent = "Save";

        tr1.appendChild(th1, th2, th3, th4, th5, th6);

        // Creacion de tbody
        const tbody = document.createElement("tbody");
        tableContainer__infoCards.appendChild(tbody);

        // Creacion de tr2
        const tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        // Creacion de td
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
        const aClass = document.creClassteElement("a");
        aClass.classList.add('tableContainer__infoCards--savecolor');
        const iClass = document.createElement("i");
        iClass.classList.add('fa-solid', 'fa-bookmark', 'fa-2x');
        aClass.appendChild(iClass);
        td6.appendChild(aClass);

        tr2.appendChild(td1, td2, td3, td4, td5, td6);
    };
};
