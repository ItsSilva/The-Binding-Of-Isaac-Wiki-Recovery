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