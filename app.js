console.log("Hello world!")

function getAttributeValue(id) {
    const value = document.getElementById(id).value;
    return parseFloat(value);
}

function duel() {
    
    const p1Health = getAttributeValue('p1-health');
    const p1Armor = getAttributeValue('p1-armor');
    const p1DPS = getAttributeValue('p1-attack');

    
    const p2Health = getAttributeValue('p2-health');
    const p2Armor = getAttributeValue('p2-armor');
    const p2DPS = getAttributeValue('p2-attack');

    
    if (isNaN(p1Health) || isNaN(p1Armor) || isNaN(p1DPS) ||
        isNaN(p2Health) || isNaN(p2Armor) || isNaN(p2DPS)) {
        alert("Please fill out all fields before continuing.");
        return;
    }

    
    function calculateTime(health, armor, dps) {
        
        const armorTime = armor / (dps * 0.5);
        
        const healthTime = health / dps;
        
        return armorTime + healthTime;
    }

    
    const p1SurvivalTime = calculateTime(p1Health, p1Armor, p2DPS);
    const p2SurvivalTime = calculateTime(p2Health, p2Armor, p1DPS);

    
    if (Math.abs(p1SurvivalTime - p2SurvivalTime) < 0.1) {
        alert("It's a draw!");
    } else if (p1SurvivalTime > p2SurvivalTime) {
        alert(`Player 1 wins! The duel lasted ${p2SurvivalTime.toFixed(1)} seconds.`);
    } else {
        alert(`Player 2 wins! The duel lasted ${p1SurvivalTime.toFixed(1)} seconds.`);
    }
}
