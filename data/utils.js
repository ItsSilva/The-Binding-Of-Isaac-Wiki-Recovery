// const data = await Response.json();
// const achievements = data.pageAchievements;
// const bosses = data.pageBosses;

export const obtenerData = async () => {
  const response = await fetch("https://raw.githubusercontent.com/ItsSilva/The-Binding-Of-Isaac-Wiki-Recovery/main/data/data.json");
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
    tr2.classList.add("card-tr");
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
    tr2.classList.add("card-tr");

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
    tr2.classList.add("card-tr");

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
    tr2.classList.add("card-tr");

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
    tr2.classList.add("card-tr");

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
export class pagCharacters {
  #id;
  image;
  name;
  description;
  item;
  hp;
  hp1;
  link;
  #nodoLink;

  constructor(id, image, name, description, item, hp, hp1, link) {
    this.#id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.item = item;
    this.hp = hp;
    this.hp1 = hp1;
    this.link = link;
  }

  render() {
    const tr2 = document.createElement("tr");
    tr2.classList.add("card-tr");

    const td1 = document.createElement("td");
    const img1 = document.createElement("img");
    img1.classList.add("clickable");
    img1.src = this.image;
    img1.alt = this.name;
    this.#nodoLink = img1;
    td1.appendChild(img1);

    const td2 = document.createElement("td");
    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    td2.appendChild(h2);

    const td3 = document.createElement("td");
    const p1 = document.createElement("p");
    p1.textContent = this.description;
    td3.appendChild(p1);

    const td4 = document.createElement("td");
    const img2 = document.createElement("img");
    img2.src = this.item;
    img2.alt = this.name;
    td4.appendChild(img2);

    const td5 = document.createElement("td");
    const img3 = document.createElement("img");
    img3.src = this.hp;
    img3.alt = this.name;
    const img4 = document.createElement("img");
    img4.src = this.hp1;
    img4.alt = this.name;
    td5.appendChild(img3);
    td5.appendChild(img4);

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

  addEventListeners() {
    this.#nodoLink.addEventListener("click", async () => {
      window.open(this.link, "_blank");
    });
  }
}
// Guardar favoritos en el localStorage segun el usuario activo
async function delayedExecution() {
  await new Promise(resolve => setTimeout(resolve, 100)); // Esperar n segundo

  // Función para obtener el ID del usuario activo del localStorage
  const getActiveUserID = () => {
      const activeUserID = localStorage.getItem('usuario-activo');
      return activeUserID ? parseInt(activeUserID) : null; // Convertir a número entero si existe
  };

  // Función para obtener la lista de usuarios del localStorage
  const getUsuariosFromLocalStorage = () => {
      const usuariosJSON = localStorage.getItem('usuarios');
      return usuariosJSON ? JSON.parse(usuariosJSON) : []; // Devolver un array vacío si no hay usuarios
  };

  // Función para guardar la lista de usuarios en el localStorage
  const saveUsuariosToLocalStorage = (usuarios) => {
      const usuariosJSON = JSON.stringify(usuarios);
      localStorage.setItem('usuarios', usuariosJSON);
  };

  // Seleccionar todos los botones de guardar dentro de las filas de la tabla
  let saveButtons = document.querySelectorAll('.tableContainer__infoCards--savecolor');
  console.log("Página cargada");
  console.log(saveButtons);

  // Convertir la NodeList en un array y agregar el evento click
  Array.from(saveButtons).forEach((button, index) => {
      button.addEventListener("click", () => {

          // Obtener el ID del usuario activo
          const activeUserID = getActiveUserID();
          // Verificar que hay un usuario activo
          if (activeUserID) {
              // Obtener el objeto de usuario correspondiente al ID
              const usuarios = getUsuariosFromLocalStorage();
              const activeUser = usuarios.find(usuario => usuario.id === activeUserID);
              if (activeUser) {
                  // Obtener la fila más cercana al botón
                  const parentRow = button.closest('.card-tr');
                  // Verificar que se ha encontrado la fila
                  if (parentRow) {
                      // Obtener los textos de los <td> en la fila y agregarlos al array
                      const tdElements = parentRow.querySelectorAll('td');
                      const tdValues = Array.from(tdElements).map(td => {
                          if (td.querySelector('img')) {
                              // Si hay una imagen dentro del <td>, obtener el src de la imagen
                              return td.querySelector('img').getAttribute('src') + ' ' + td.textContent.trim();
                          } else {
                              // Si no hay imagen, solo obtener el texto del <td>
                              return td.textContent.trim();
                          }
                      });
                      // Verificar si el elemento ya está en la lista de favoritos
                      const index = activeUser.favoritos.findIndex(favorito => JSON.stringify(favorito) === JSON.stringify(tdValues));
                      if (index !== -1) {
                          // Si el elemento ya está en la lista, eliminarlo y mostrar una alerta
                          activeUser.favoritos.splice(index, 1);
                          alert("Elemento eliminado de favoritos.");
                      } else {
                          // Si el elemento no está en la lista, agregarlo y mostrar una alerta
                          activeUser.favoritos.push(tdValues);
                          alert("Elemento agregado a favoritos.");
                      }
                      // Guardar la lista de usuarios actualizada en el localStorage
                      saveUsuariosToLocalStorage(usuarios);
                      console.log("Favoritos actualizados para el usuario activo:", activeUser.favoritos);
                  } else {
                      console.log(`Fila de la tabla no encontrada para el botón de guardar ${index}`);
                  }
              } else {
                  console.log("Usuario activo no encontrado");
              }
          } else {
              console.log("No hay usuario activo");
          }
      });
  });
}

// Llamar a la función delayedExecution después de que la ventana haya cargado
window.addEventListener("load", delayedExecution);






// Función para obtener el ID del usuario activo del localStorage
export const getActiveUserID = () => {
  const activeUserID = localStorage.getItem('usuario-activo');
  return activeUserID ? parseInt(activeUserID) : null; // Convertir a número entero si existe
};

// Función para obtener la lista de usuarios del localStorage
export const getUsuariosFromLocalStorage = () => {
  const usuariosJSON = localStorage.getItem('usuarios');
  return usuariosJSON ? JSON.parse(usuariosJSON) : []; // Devolver un array vacío si no hay usuarios
};

// Función para guardar la lista de usuarios en el localStorage
export const saveUsuariosToLocalStorage = (usuarios) => {
  const usuariosJSON = JSON.stringify(usuarios);
  localStorage.setItem('usuarios', usuariosJSON);
};
// Función para cargar los favoritos del usuario activo en la tabla
export function cargarFavoritosEnTabla() {
  // Obtener el ID del usuario activo
  const activeUserID = getActiveUserID();

  // Verificar que hay un usuario activo
  if (activeUserID) {
    // Obtener la lista de usuarios del localStorage
    const usuarios = getUsuariosFromLocalStorage();

    // Encontrar el usuario activo
    const activeUser = usuarios.find(usuario => usuario.id === activeUserID);

    // Verificar que se encontró el usuario activo
    if (activeUser) {
      // Obtener la tabla donde se cargarán los favoritos
      const table = document.getElementById('tableContainer__infoCards');
      const tbody = table.getElementsByTagName('tbody')[0];

      // Limpiar la tabla (omitiendo el thead)
      while (tbody.firstChild) {
        if (tbody.firstChild.tagName !== 'THEAD') {
          tbody.removeChild(tbody.firstChild);
        } else {
          break;
        }
      }

      // Iterar sobre la lista de favoritos del usuario activo
      for (const favorito of activeUser.favoritos) {
        // Crear una nueva fila
        const row = document.createElement('tr');
        row.classList.add('card-tr');

        // Iterar sobre los valores del favorito y crear celdas
        for (const value of favorito) {
          const cell = document.createElement('td');
          if (value.includes(' ')) {
            // Si el valor contiene un espacio, es una imagen + texto
            const [imageSource, ...text] = value.split(' ');
            if (imageSource.startsWith('http')) {
              // Si la fuente de la imagen es una URL válida, crear la imagen
              const img = document.createElement('img');
              img.src = imageSource;
              cell.appendChild(img);
            }
            cell.appendChild(document.createTextNode(text.join(' ')));
          } else {
            // Si el valor no contiene espacio, es solo texto
            cell.textContent = value;
          }
          row.appendChild(cell);
        }

        // Agregar un botón de "guardar" a la fila
        const saveButton = document.createElement('td');
        saveButton.classList.add('tableContainer__infoCards--savecolor');
        const saveLink = document.createElement('a');
        saveLink.classList.add('tableContainer__infoCards--savecolor');
        const saveIcon = document.createElement('i');
        saveIcon.classList.add('fa-solid', 'fa-bookmark', 'fa-2x');
        saveLink.appendChild(saveIcon);
        saveButton.appendChild(saveLink);
        row.appendChild(saveButton);

        // Agregar la fila a la tabla
        tbody.appendChild(row);
      }
    } else {
      console.log('Usuario activo no encontrado');
    }
  } else {
    console.log('No hay usuario activo');
  }
}
