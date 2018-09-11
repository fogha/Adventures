/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScores, activePlayer, gamePlaying, lastDice;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        //1.roll dice
        var dice_1 = Math.floor(Math.random() * 6 + 1);
        var dice_2 = Math.floor(Math.random() * 6 + 1);
        console.log("roll one is " + dice_1 + ' and roll two is' + dice_2);

        //2. Display roll dice
        var diceDOM = document.querySelector("#dice-1");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice_1 + ".png";

        var diceDOM = document.querySelector("#dice-2");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice_2 + ".png";

        //3. Update roundScores if rolled is NOT a 1
        if (dice_1 !== 1 && dice_2 !== 1) {
            //add score
            roundScores += dice_1 + dice_2;
            document.querySelector(
                "#current-" + activePlayer
            ).textContent = roundScores;
        } else {
            //next player
            nextPlayer();
        }

        //challange 2
        /*
        if ( (dice_1 === 6 && lastDice === 6) || (dice_2 === 6 && lastDice === 6) ) {
          lastDice = 0;
          console.log("last dice" + lastDice);
          nextPlayer();
        } else if (dice !== 1) {
          //add score
          roundScores += dice;
          document.querySelector(
            "#current-" + activePlayer
          ).textContent = roundScores;
          lastDice = dice;
        } else {
          //next player
          lastDice = 0;
          nextPlayer();
        }
        */
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    var winningScores;
    if (gamePlaying) {
        //1. add scores
        scores[activePlayer] += roundScores;

        //2. update UI
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];
        var input = document.querySelector(".final-score").value;
        if (input) winningScores = input;
        else winningScores = 100;
        //3. check player won the game
        if (scores[activePlayer] >= winningScores) {
            document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
            document.querySelector("#dice-1").style.display = "none";
            document.querySelector("#dice-2").style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
            gamePlaying = false;
        }
        //next player
        else
            // lastDice = 0;
            nextPlayer();
    }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
    if (activePlayer === 0) activePlayer = 1;
    else activePlayer = 0;
    roundScores = 0;

    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";

    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

function init() {
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;

    gamePlaying = true;

    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document
        .querySelector(".player-0-panel")
        .classList.remove("winner", "active");
    document
        .querySelector(".player-1-panel")
        .classList.remove("winner", "active");
    document.querySelector(".player-0-panel").classList.add("active");
}