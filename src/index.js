let victoryAmount = rankedCalculator(147, 53)
let heroName = "Frederico"
let rankLevel = levelCalculator(victoryAmount)

function rankedCalculator(victory, loss) {
    return victory - loss
}

function levelCalculator (victoryAmount) {
    if (victoryAmount < 10) {
    return "Ferro"
    } else if (victoryAmount > 10 && victoryAmount <= 20) {
    return "Bronze"
    } else if (victoryAmount > 20 && victoryAmount <= 50) {
    return  "Prata"
    } else if (victoryAmount > 50 && victoryAmount <= 80) {
    return "Ouro"
    } else if (victoryAmount > 80 && victoryAmount <= 90) {
    return "Diamante"
    } else if (victoryAmount > 90 && victoryAmount <= 100) {
    return "Lendário"
    } else {
    return "Imortal"
    }
}
console.log("O herói " + heroName + " tem o saldo de " + victoryAmount + " vitórias e está no nível " + rankLevel)   