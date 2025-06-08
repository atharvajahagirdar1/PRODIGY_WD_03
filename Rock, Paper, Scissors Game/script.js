const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const drawsDisplay = document.getElementById("draws");
const resetButton = document.getElementById("reset");

// To Fetch or Load audio files
const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const drawSound = document.getElementById("drawSound");

// Score variables
let wins = 0, losses = 0, draws = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function() {
        clickSound.play(); // To Play click sound when button is clicked

        const userChoice = this.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        userChoiceDisplay.textContent = `You: ${getEmoji(userChoice)}`;
        computerChoiceDisplay.textContent = `AI: ${getEmoji(computerChoice)}`;

        const result = getWinner(userChoice, computerChoice);
        winnerDisplay.textContent = result;

        if (result.includes("Win")) {
            wins++;
            winSound.play();
        } else if (result.includes("Lose")) {
            losses++;
            loseSound.play();
        } else {
            draws++;
            drawSound.play();
        }

        updateScores();
    });
});

resetButton.addEventListener("click", function() {
    wins = 0;
    losses = 0;
    draws = 0;
    updateScores();
});

function updateScores() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
}

function getEmoji(choice) {
    return choice === "rock" ? "✊" : choice === "paper" ? "✋" : "✌️";
}

function getWinner(user, computer) {
    if (user === computer) return "It's a Draw! 🤝";
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You Win! 🎉";
    }
    return "You Lose! 😢";
}