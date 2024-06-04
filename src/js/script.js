let recipe = data;

console.log(recipe.recipename)

function addAll() {
    let tableContainer = document.getElementById('table');
    tableContainer.innerHTML='';

    let port = document.getElementById('portions').value;
    portions = parseInt(port, 10)

    for (let i = 0; i < recipe.ingredients.length; i++) {
        const elem = recipe.ingredients[i];
        const calcedSize = calcSize(elem.size, portions);
        addIngredient(calcedSize,elem.unit,elem.name);
    }
}

function addIngredient(size, unit, name) {
    document.getElementById('table').innerHTML += `
    <tr>
    <td>${size} ${unit} ${name}</td>
    </tr>`;
}

function calcSize(size, portions) {
    return size * portions;
}

function duration() {
    let prepElements = document.querySelectorAll('.prepDuration');
    prepElements.forEach(element => {
        element.innerHTML = `Arbeitszeit: ${recipe.preparationsduration}`;
    });
    let total = document.getElementById('totalDuration');
    total.innerHTML = `Gesamtzeit: ${recipe.totalduration}`;
}

window.onload = function() {
    includeHTML();
    addAll();
    duration();
    changeTitle();
}


function changeTitle() {
    document.getElementsByTagName('title')[0].innerHTML = `Kochwelt - ${recipe.recipename}`
}