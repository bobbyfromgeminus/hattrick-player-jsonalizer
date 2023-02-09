'use strict';

let players = [];
const playerCard = document.querySelector('.card');
const aside = document.querySelector('aside');
//const colors = ['#F74552', '#E76F30', '#F4B631', '#F8D730', '#95DD4D', '#2FE18B', '#30D0D0', '#358FE5', '#8A66C6', '#B765C7'];
const colors = ['rgba(255, 255, 255, .1)', 
                'rgba(255, 255, 255, .2)', 
                'rgba(255, 255, 255, .5)', 
                'rgba(255, 255, 255, .7)', 
                'rgba(255, 255, 255, .8)', 
                'rgba(255, 255, 255, .9)', 
                'rgba(255, 255, 255, .9)', 
                'rgba(255, 255, 255, 1)', 
                'rgba(255, 255, 255, 1)', 
                'rgba(255, 255, 255, 1)'];

const generateColor = (value, max) => {
    let color = 'white';
    const colorValue = value / max;
    if (colorValue<=1 && colorValue>.9) color =colors[9];
    else if (colorValue<=.9 && colorValue>.8) color =colors[8];
    else if (colorValue<=.8 && colorValue>.7) color =colors[7];
    else if (colorValue<=.7 && colorValue>.6) color =colors[6];
    else if (colorValue<=.6 && colorValue>.5) color =colors[5];
    else if (colorValue<=.5 && colorValue>.4) color =colors[4];
    else if (colorValue<=.4 && colorValue>.3) color =colors[3];
    else if (colorValue<=.3 && colorValue>.2) color =colors[2];
    else if (colorValue<=.2 && colorValue>.1) color =colors[1];
    else if (colorValue<=.1) color = colors[0];
    return color;
}


const getPlayerData = (id) => {
    const player = (players.filter( item => item.id == id))[0];
    playerCard.innerHTML = 
    `<div class="head">
        <p rel="number">${player.number}</p>
        <a rel="name" href="https://hattrick.org/Club/Players/Player.aspx?playerId=${player.id}" target="_blank">${player.name}</a>
    </div>
    <div class="body">
        <p>pozíció</p>
        <div>
            <label>életkor</label>
            <span rel="age">${(player.age.split(' '))[0]}</span>
        </div>
        <div>
            <label>tsi</label>
            <span rel="tsi">${player.tsi}</span>
        </div>
        <div>
            <label>forma</label>
            <span rel="form">${player.formValue}/${player.formMax}</span>
        </div>
        <div>
            <label>erőnlét</label>
            <span>${player.fitnessValue}/${player.fitnessMax}</span>
        </div>
    </div>
    <div class="foot">
        <div>
            <label>védés</label>
            <label>${player.protectionValue}/${player.protectionMax}</label>
            <div><p style="width: calc(100% / ${player.protectionMax} * ${player.protectionValue}); background-color: ${generateColor(player.protectionValue, player.protectionMax)};""></p></div>
        </div>
        <div>
            <label>védekezés</label>
            <label>${player.defenseValue}/${player.defenseMax}</label>
            <div><p style="width: calc(100% / ${player.defenseMax} * ${player.defenseValue}); background-color: ${generateColor(player.defenseValue, player.defenseMax)};""></p></div>
        </div>
        <div>
            <label>játékszervezés</label>
            <label>${player.organizationValue}/${player.organizationMax}</label>
            <div><p style="width: calc(100% / ${player.organizationMax} * ${player.organizationValue}); background-color: ${generateColor(player.organizationValue, player.organizationMax)};""></p></div>
        </div>
        <div>
            <label>szélsőjáték</label>
            <label>${player.winggameValue}/${player.winggameMax}</label>
            <div><p style="width: calc(100% / ${player.winggameMax} * ${player.winggameValue}); background-color: ${generateColor(player.winggameValue, player.winggameMax)};"></p></div>
        </div>
        <div>
            <label>átadás</label>
            <label>${player.passingValue}/${player.passingMax}</label>
            <div><p style="width: calc(100% / ${player.passingMax} * ${player.passingValue}); background-color: ${generateColor(player.passingValue, player.passingMax)};""></p></div>
        </div>
        <div>
            <label>gólszerzés</label>
            <label>${player.scoringValue}/${player.scoringMax}</label>
            <div><p style="width: calc(100% / ${player.scoringMax} * ${player.scoringValue}); background-color: ${generateColor(player.scoringValue, player.scoringMax)};""></p></div>
        </div>
        <div>
            <label>pontrúgás</label>
            <label>${player.setpieceValue}/${player.setpieceMax}</label>
            <div><p style="width: calc(100% / ${player.setpieceMax} * ${player.setpieceValue}); background-color: ${generateColor(player.setpieceValue, player.setpieceMax)};""></p></div>
        </div>
    </div>`;
}

const generateButtons = () => {
    players.forEach( item => {
        const playerButton = document.createElement('button');
        playerButton.textContent = item.name;
        playerButton.setAttribute('onclick', 'getPlayerData('+item.id+')');
        aside.appendChild(playerButton);
    })
}

fetch('/assets/json/players.json')
  .then((response) => response.json())
  .then((data) => {
    players = data.players;
    generateButtons();
});