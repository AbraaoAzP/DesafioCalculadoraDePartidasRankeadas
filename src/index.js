let victoryAmount = rankedCalculator(147, 53)
let heroName = "Frederico"
let rankLevel = ""

function rankedCalculator(victory, loss) {
    return victory - loss
}

if (victoryAmount < 10) {
    rankLevel = "Ferro"
} else if (victoryAmount > 10 && victoryAmount <= 20) {
    rankLevel = "Bronze"
} else if (victoryAmount > 20 && victoryAmount <= 50) {
    rankLevel = "Prata"
} else if (victoryAmount > 50 && victoryAmount <= 80) {
    rankLevel = "Ouro"
} else if (victoryAmount > 80 && victoryAmount <= 90) {
    rankLevel = "Diamante"
} else if (victoryAmount > 90 && victoryAmount <= 100) {
    rankLevel = "Lendário"
} else {
    rankLevel = "Imortal"
}

console.log("O herói " + heroName + " tem o saldo de " + victoryAmount + " vitórias e está no nível " + rankLevel)   