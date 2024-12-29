// script.js
document.getElementById("calculate").addEventListener("click", function () {
    const playerCount = document.getElementById("player-count").value;
    const playerCards = [
        document.getElementById("card1").value,
        document.getElementById("card2").value,
    ];
    const communityCards = [
        document.getElementById("community-card1").value,
        document.getElementById("community-card2").value,
        document.getElementById("community-card3").value,
        document.getElementById("community-card4").value,
        document.getElementById("community-card5").value,
    ].filter((card) => card !== "");

    const probabilities = calculateProbabilities(playerCount, playerCards, communityCards);
    document.getElementById("probabilities").innerHTML = formatProbabilities(probabilities);
});

function calculateProbabilities(playerCount, playerCards, communityCards) {
    // Placeholder: Actual poker logic/library should replace this.
    return {
        win: Math.random() * 100,
        tie: Math.random() * 50,
        lose: Math.random() * 50,
    };
}

function formatProbabilities(probabilities) {
    return `
        <p>Probabilità di Vincita: ${probabilities.win.toFixed(2)}%</p>
        <p>Probabilità di Pareggio: ${probabilities.tie.toFixed(2)}%</p>
        <p>Probabilità di Perdita: ${probabilities.lose.toFixed(2)}%</p>
    `;
}
