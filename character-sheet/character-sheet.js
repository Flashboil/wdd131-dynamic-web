// --primary-color: #FFC266;
// --secondary-color: #241200;
// --accent1-color: #FFDB9A;
// --accent2-color: #FF9B00;

const ctx = document.getElementById('myChart');

const data = {
    labels: [
      'STR',
      'DEX',
      'CON',
      'INT',
      'WIS',
      'CHA',
    ],
    datasets: [{
      label: '',
      data: character.attributes,
      pointRadius: 0,
      fill: true,
      backgroundColor: '#FFc266',
      borderColor: '#ffc266',
      pointBackgroundColor: '#ff9b00',
      pointBorderColor: '#ff9b00',
    }]
  };

new Chart(ctx, {
    type: 'radar',
    data: data, options: {
        scales: {
            r: {
                ticks: {
                    stepSize: 3,
                    display: false
                },
                grid: {
                    color: '#ffc266'
                },
                pointLabels: {
                    color: "#ffdb9a",
                    font: {
                      size: 16, 
                      family: "Courier",
                      weight: "bold"
                    }
                },
                min: 0,
                max: 18
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

function FormatProfile(character)
{
    return`
    <img class="profile-image" src=${character.src} alt=${character.alt}>
    <div class="character-data">
        <p>NAME: ${character.characterName}</p>
        <section>
            <p>CLASS: ${character.class}</p>
            <p>LEVEL: ${character.level}</p>
        </section>
        <section>
            <p id="health" role="button" tabindex="0">HP: ${character.health}/${character.maxHealth}</p>
            <p id="ac">AC: ${character.armorClass}</p>
        </section>
        <p id="effort" role="button" tabindex="0">EFFORT: ${character.effort}/${character.maxEffort}</p>
    </div>
    `;
}


function FormatAttributes(character)
{
    return`
    <section>
        <p>STR: ${character.attributes[0]}</p>
        <p>DEX: ${character.attributes[1]}</p>
        <p>CON: ${character.attributes[2]}</p>
    </section>
    <section>
        <p>INT: ${character.attributes[3]}</p>
        <p>WIS: ${character.attributes[4]}</p>
        <p>CHA: ${character.attributes[5]}</p>
    </section>
    `
}

function FormatSkills(character)
{
    return `
    <section id="skills-left">
        <p>Administer [${AddPlusSign(character.skills.administer)}]</p>
        <p>Connect [${AddPlusSign(character.skills.connect)}]</p>
        <p>Exert [${AddPlusSign(character.skills.exert)}]</p>
        <p>Fix [${AddPlusSign(character.skills.fix)}]</p>
        <p>Heal [${AddPlusSign(character.skills.heal)}]</p>
        <p>Know [${AddPlusSign(character.skills.know)}]</p>
        <p>Lead [${AddPlusSign(character.skills.lead)}]</p>
        <p>Notice [${AddPlusSign(character.skills.notice)}]</p>
        <p>Perform [${AddPlusSign(character.skills.perform)}]</p>
        <p>Pilot [${AddPlusSign(character.skills.pilot)}]</p>
        <p></p>
    </section>

    <section id="skills-right">
        <p>[${AddPlusSign(character.skills.program)}] Program</p>
        <p>[${AddPlusSign(character.skills.punch)}] Punch</p>
        <p>[${AddPlusSign(character.skills.shoot)}] Shoot</p>
        <p>[${AddPlusSign(character.skills.sneak)}] Sneak</p>
        <p>[${AddPlusSign(character.skills.stab)}] Stab</p>
        <p>[${AddPlusSign(character.skills.survive)}] Survive</p>
        <p>[${AddPlusSign(character.skills.talk)}] Talk</p>
        <p>[${AddPlusSign(character.skills.trade)}] Trade</p>
        <p>[${AddPlusSign(character.skills.work)}] Work</p>
    </section>
    `;
}

function FormatSaves(character)
{
    return`
    <section>
        <p>PHYSICAL</p>
        <p class="saving">v${(character.saves.physical)}</p>
    </section>
    <section>
        <p>MENTAL</p>
        <p class="saving">v${(character.saves.mental)}</p>
    </section>
    <section>
        <p>EVASION</p>
        <p class="saving">v${(character.saves.evasion)}</p>
    </section>
    `
}


function AddPlusSign(value)
{
    if (value >= 0)
    {
        return `+${value}`
    }
    return value
}

function makeAdjustableStat(elem, getValue, setValue, getMax) {
    elem.addEventListener("click", () => {
        let value = getValue();
        let max = getMax();

        if (value < max) {
            setValue(value + 1);
            elem.textContent = elem.textContent.split(":")[0] + ": " + getValue() + "/" + max;
        }
    });

    elem.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        let value = getValue();
        let max = getMax();

        if (value > 0) {
            setValue(value - 1);
            elem.textContent = elem.textContent.split(":")[0] + ": " + getValue() + "/" + max;
        }
    });
}

function DisplayAll(character)
{
    const profile = document.querySelector(".profile")
    profile.innerHTML = FormatProfile(character)
    
    const skills = document.querySelector(".skills")
    skills.innerHTML = FormatSkills(character)
    
    const attributes = document.querySelector(".stats-data")
    attributes.innerHTML = FormatAttributes(character)
    
    const saves = document.querySelector(".saving-throws")
    saves.innerHTML = FormatSaves(character)
    
}

DisplayAll(character);

const healthElem = document.getElementById("health");
const effortElem = document.getElementById("effort");

makeAdjustableStat(
    healthElem,
    () => character.health,
    (val) => character.health = val,
    () => character.maxHealth
);

makeAdjustableStat(
    effortElem,
    () => character.effort,
    (val) => character.effort = val,
    () => character.maxEffort
);