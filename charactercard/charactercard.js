const characterCard = {
    name: "Salacious B. Crumb",
    class: "Bard",
    level: "5",
    health: "150",
    image: "crumb.webp",
    attacked: function () {
        health -= 20;
        if (health <= 0) {
            alert("Your character has died.")
        }
    },
    levelUp: function () {
        level += 1
    }
}



function statsTemplate(character){
    return `
    <p>
    Class: ${character.class}<br>
    Level: ${character.level}<br>
    Health: ${character.health}<br>
    <p>
    `
}

function renderDetails(character) {
    const nameEl = document.querySelector(".name");
    const imageEl = document.querySelector(".image");
    const statsEl = document.querySelector(".stats");
    nameEl.textContent = character.name;
    imageEl.src = character.image;
    statsEl.innerHTML = statsTemplate(character);
}

// document.querySelector(".button").addEventListener("click", ()=>{
    
// })

renderDetails(characterCard);