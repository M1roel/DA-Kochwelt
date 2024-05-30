let recipe = data;

console.log(recipe.recipename)

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function addAll() {
    for (let i = 0; i < recipe.ingriedients.length; i++) {
        const elem = recipe.ingriedients[i];
        addIngredient(elem.name,elem.size,elem.unit);
    }
}

function addIngredient(name, size, unit) {
    document.getElementById('table').innerHTML += `
    <tr>
    <td>${size} ${unit} ${name}</td>
    </tr>`;
}

window.onload = function() {
    includeHTML();
    addAll();
    changeTitle();
}


function changeTitle() {
    document.getElementsByTagName('title')[0].innerHTML = `Kochwelt - ${recipe.recipename}`
}