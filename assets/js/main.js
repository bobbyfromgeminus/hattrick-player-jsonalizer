'use strict';

let players = [];
const playerCard = document.querySelector('.card');
const aside = document.querySelector('aside');


const getPlayerData = (id) => {
    const player = (players.filter( item => item.id == id))[0];
    playerCard.innerHTML = 
    `<div class="head">
        <p rel="number">${player.number}</p>
        <span rel="name">${player.name}</span>
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
            <div><p style="width: calc(100% / ${player.protectionMax} * ${player.protectionValue})"></p></div>
        </div>
        <div>
            <label>védekezés</label>
            <label>${player.defenseValue}/${player.defenseMax}</label>
            <div><p style="width: calc(100% / ${player.defenseMax} * ${player.defenseValue})"></p></div>
        </div>
        <div>
            <label>játékszervezés</label>
            <label>${player.organizationValue}/${player.organizationMax}</label>
            <div><p style="width: calc(100% / ${player.organizationMax} * ${player.organizationValue})"></p></div>
        </div>
        <div>
            <label>szélsőjáték</label>
            <label>${player.winggameValue}/${player.winggameMax}</label>
            <div><p style="width: calc(100% / ${player.winggameMax} * ${player.winggameValue})"></p></div>
        </div>
        <div>
            <label>átadás</label>
            <label>${player.passingValue}/${player.passingMax}</label>
            <div><p style="width: calc(100% / ${player.passingMax} * ${player.passingValue})"></p></div>
        </div>
        <div>
            <label>gólszerzés</label>
            <label>${player.scoringValue}/${player.scoringMax}</label>
            <div><p style="width: calc(100% / ${player.scoringMax} * ${player.scoringValue})"></p></div>
        </div>
        <div>
            <label>pontrúgás</label>
            <label>${player.setpieceValue}/${player.setpieceMax}</label>
            <div><p style="width: calc(100% / ${player.setpieceMax} * ${player.setpieceValue})"></p></div>
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