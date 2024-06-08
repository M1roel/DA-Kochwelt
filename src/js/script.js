let recipe = data;

console.log(recipe.recipename);

function addAll() {
  let tableContainer = document.getElementById("table");
  tableContainer.innerHTML = "";

  let port = document.getElementById("portions").value;
  portions = parseInt(port, 10);

  if(port === '' || port <= 0 || port > 10) {
    showInfo('Bitte geben Sie eine Portionenzahl zwischen 1 und 10 ein.')
    return;
  }

  for (let i = 0; i < recipe.ingredients.length; i++) {
    const elem = recipe.ingredients[i];
    const calcedSize = calcSize(elem.size, portions);
    addIngredient(calcedSize, elem.unit, elem.name);
  }
}

function showInfo(message) {
  const info = document.getElementById("recipeinfo");
  info.textContent = message;
  info.classList.remove("d-none");
  setTimeout(() => info.classList.add("d-none"), 1500);
  info.style.backgroundColor = "#ffdddd";
  info.style.color = "#d8000c";
}

function addIngredient(size, unit, name) {
  document.getElementById("table").innerHTML += `
    <tr>
    <td>${size} ${unit} ${name}</td>
    </tr>`;
}

function calcSize(size, portions) {
  return size * portions;
}

function duration() {
  let prepElements = document.querySelectorAll(".prepDuration");
  prepElements.forEach((element) => {
    element.innerHTML = `Arbeitszeit: ${recipe.preparationsduration}`;
  });
  let total = document.getElementById("totalDuration");
  total.innerHTML = `Gesamtzeit: ${recipe.totalduration}`;
}

window.onload = function () {
  includeHTML();
  addAll();
  duration();
  changeTitle();
};

function changeTitle() {
  document.getElementsByTagName(
    "title"
  )[0].innerHTML = `Kochwelt - ${recipe.recipename}`;
}
