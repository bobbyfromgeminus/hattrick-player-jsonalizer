const playerCards = document.querySelectorAll('.teamphoto-player');
const jsonData = { players: [] };

const getPlayerDate = (i) => {

    // ID
    const playerIdData = playerCards[i].querySelector(' h3 a').getAttribute('href');
    const playerIdDataArray1 = playerIdData.split('&');
    const playerIdDataArray2 = playerIdDataArray1[0].split('=');
    const playerId = parseInt(playerIdDataArray2[1]);
	// név
	const playerName = playerCards[i].querySelector(' h3 a').getAttribute('title');
    // mezszám
	const playerNumber = playerCards[i].querySelector(' h3').childNodes[0].nodeValue.replace('.', '').replace('\n', '').replace(/ /g, '');
	// nemzetiség
	const playerNation = playerCards[i].querySelector('span.float_right a img').getAttribute('title');

    // sérülés
    let playerInjury = 0;
    const playerInjuryData = playerCards[i].querySelector(' h3 .icon-injury');
    if (playerInjuryData) playerInjury = parseInt(playerInjuryData.getAttribute('data-injury-length'));
    // sárgalap
    let playerYellowCards = '';
    const playerYellowCardsData = playerCards[i].querySelector(' h3 .icon-yellow-card');
    if (playerYellowCardsData) playerYellowCards = playerYellowCardsData.getAttribute('title');
    // piroslap
    let playerRedCards = '';
    const playerRedCardsData = playerCards[i].querySelector(' h3 .icon-red-card');
    if (playerRedCardsData) playerRedCards = playerRedCardsData.getAttribute('title');

	// alap adatok
	const playerBaseSkills = playerCards[i].querySelectorAll('p a');
	// tapasztalat
	const playerBaseSkill_1 = playerBaseSkills[0].getAttribute('title');
	// vezetői képesség
	const playerBaseSkill_2 = playerBaseSkills[1].getAttribute('title');
	// hűség
	const playerBaseSkill_3 = playerBaseSkills[2].getAttribute('title');

	// képességek
	const playerInfos = playerCards[i].querySelectorAll('.transferPlayerInformation table tbody tr');
        // életkor
        const playerAgeTitle = playerInfos[0].querySelector('td:first-child').textContent;
        const playerAgeValue = playerInfos[0].querySelector('td:last-child').textContent;
        // tsi
        const playerTsiTitle = playerInfos[1].querySelector('td:first-child').textContent;
        const playerTsiValue = playerInfos[1].querySelector('td:last-child').textContent.replace(/ /g, '');
        // fizetés
        const playerWageTitle = playerInfos[2].querySelector('td:first-child').textContent;
        const playerWageValue = playerInfos[2].querySelector('td:last-child').textContent;
        // specialitás
        const playerSpecTitle = playerInfos[3].querySelector('td:first-child').textContent;
        const playerSpecValue = playerInfos[3].querySelector('td:last-child').textContent;
        // forma
        const playerFormTitle = playerInfos[4].querySelector('td:first-child').textContent.replace(' ', '');
        const playerFormValue = playerInfos[4].querySelector('td:nth-child(2) .ht-bar').getAttribute('level');
        const playerFormMax = playerInfos[4].querySelector('td:nth-child(2) .ht-bar').getAttribute('max');
        // erőnlét
        const playerFitTitle = playerInfos[5].querySelector('td:first-child').textContent.replace(' ', '');
        const playerFitValue = playerInfos[5].querySelector('td:nth-child(2) .ht-bar').getAttribute('level');
        const playerFitMax = playerInfos[5].querySelector('td:nth-child(2) .ht-bar').getAttribute('max');

    // képességek 2
	const playerSkills = playerCards[i].querySelectorAll('.transferPlayerSkills table tbody tr');
        // védés
        const playerProtectionTitle = playerSkills[0].querySelector('td:first-child').textContent.replace(' ', '');
        const playerProtectionValue = parseInt(playerSkills[0].querySelector('td:nth-child(2) .ht-bar').getAttribute('level'));
        const playerProtectionMax = parseInt(playerSkills[0].querySelector('td:nth-child(2) .ht-bar').getAttribute('max'));
        // védekezés
        const playerDefenseTitle = playerSkills[1].querySelector('td:first-child').textContent.replace(' ', '');
        const playerDefenseValue = parseInt(playerSkills[1].querySelector('td:nth-child(2) .ht-bar').getAttribute('level'));
        const playerDefenseMax = parseInt(playerSkills[1].querySelector('td:nth-child(2) .ht-bar').getAttribute('max'));
        // játékszervezés
        const playerOrganizationTitle = playerSkills[2].querySelector('td:first-child').textContent.replace(' ', '');
        const playerOrganizationValue = parseInt(playerSkills[2].querySelector('td:nth-child(2) .ht-bar').getAttribute('level'));
        const playerOrganizationMax = parseInt(playerSkills[2].querySelector('td:nth-child(2) .ht-bar').getAttribute('max'));
        // szélsőjáték
        const playerWinggameTitle = playerSkills[3].querySelector('td:first-child').textContent.replace(' ', '');
        const playerWinggameValue = parseInt(playerSkills[3].querySelector('td:nth-child(2) .ht-bar').getAttribute('level'));
        const playerWinggameMax = parseInt(playerSkills[3].querySelector('td:nth-child(2) .ht-bar').getAttribute('max'));
        // átadás
        const playerPassingTitle = playerSkills[4].querySelector('td:first-child').textContent.replace(' ', '');
        const playerPassingValue = parseInt(playerSkills[4].querySelector('td:nth-child(2) .ht-bar').getAttribute('level'));
        const playerPassingMax = parseInt(playerSkills[4].querySelector('td:nth-child(2) .ht-bar').getAttribute('max'));
        // gólszerzés
        const playerScoringTitle = playerSkills[5].querySelector('td:first-child').textContent.replace(' ', '');
        const playerScoringValue = parseInt(playerSkills[5].querySelector('td:nth-child(2) .ht-bar').getAttribute('level'));
        const playerScoringMax = parseInt(playerSkills[5].querySelector('td:nth-child(2) .ht-bar').getAttribute('max'));
        // pontrúgás
        const playerSetpieceTitle = playerSkills[6].querySelector('td:first-child').textContent.replace(' ', '');
        const playerSetpieceValue = parseInt(playerSkills[6].querySelector('td:nth-child(2) .ht-bar').getAttribute('level'));
        const playerSetpieceMax = parseInt(playerSkills[6].querySelector('td:nth-child(2) .ht-bar').getAttribute('max'));

	let playerDataObj = {};
    playerDataObj.id = playerId ;
    playerDataObj.number = playerNumber ;
	playerDataObj.name = playerName ;
	playerDataObj.nationality = playerNation;
    playerDataObj.injury = playerInjury;
    playerDataObj.yellowCards = playerYellowCards;
    playerDataObj.redCards = playerRedCards;
	playerDataObj.experience = playerBaseSkill_1;
	playerDataObj.leadership = playerBaseSkill_2;
	playerDataObj.loyalty = playerBaseSkill_3;
	playerDataObj.age = playerAgeValue;
	playerDataObj.tsi = playerTsiValue;
	playerDataObj.wage = playerWageValue;
	playerDataObj.speciality = playerSpecValue;
	playerDataObj.formValue = playerFormValue;
	playerDataObj.formMax = playerFormMax;
	playerDataObj.fitnessValue = playerFitValue;
	playerDataObj.fitnessMax = playerFitMax;
    playerDataObj.protectionValue = playerProtectionValue;
	playerDataObj.protectionMax = playerProtectionMax;
    playerDataObj.defenseValue = playerDefenseValue;
	playerDataObj.defenseMax = playerDefenseMax;
    playerDataObj.organizationValue = playerOrganizationValue;
	playerDataObj.organizationMax = playerOrganizationMax;
    playerDataObj.winggameValue = playerWinggameValue;
	playerDataObj.winggameMax = playerWinggameMax;
    playerDataObj.passingValue = playerPassingValue;
	playerDataObj.passingMax = playerPassingMax;
    playerDataObj.scoringValue = playerScoringValue;
	playerDataObj.scoringMax = playerScoringMax;
    playerDataObj.setpieceValue = playerSetpieceValue;
	playerDataObj.setpieceMax = playerSetpieceMax;

	return playerDataObj;
}

playerCards.forEach((element, index) => {
    jsonData.players.push(getPlayerDate(index));
});

console.log(JSON.stringify(jsonData,null,2));