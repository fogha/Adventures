/* GAME RULES*/
/*
- The game has 2 players playing in rounds.
- In each turn, a player rolls the dice as many times as he wishes, each result in added to his 
current score which is then added to his round score.
- But if the player in question plays a 1, all his current score is lost. And he stops 
playing and consequently passes the dice to the next player
- The first player to reach 100 points is the winner, however, my version will go on a little 
differently
*/

var scores, roundScore, activePlayer, gameplaying;

init();

document.querySelector(".btn-two").addEventListener("click", function () {
    if(gameplaying){
        //Generating a random number
        var dice = Math.floor(Math.random() * 6 + 1);

        //display the result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";

        //update the round score if number rolled is different from 1
        if (dice !== 1) {
            //ADD SCORE
            roundScore += dice;
            document.querySelector("#current-score-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});


document.querySelector(".btn-three").addEventListener("click", function () {
    if(gameplaying) {
         // adding current score to global score
         scores[activePlayer] += roundScore;

         //updating the UI
         document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

         //check if the player won the game
         if (scores[activePlayer] >= 10) {
             document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
             document.querySelector(".dice").style.display = "none";
             document.querySelector(".one-" + activePlayer).classList.add("winner");
             document.querySelector(".one-" + activePlayer).classList.remove("active");
             gameplaying = false;
         }
         //next player
         nextPlayer();
    }
});


document.querySelector(".btn-one").addEventListener("click", init);



function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-score-0").textContent = 0;
    document.getElementById("current-score-1").textContent = 0;

    document.querySelector(".zero").classList.toggle("active");
    document.querySelector(".one").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameplaying = true;

    document.querySelector(".dice").style.display = "none";


    document.getElementById("current-score-0").textContent = 0;
    document.getElementById("current-score-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("name-0").textContent = 'PLAYER 1';
    document.getElementById("name-1").textContent = 'PLAYER 2';
    document.querySelector(".one-0" ).classList.remove("winner");
    document.querySelector(".one-1" ).classList.remove("active");
    document.querySelector(".one-1" ).classList.remove("winner");
    document.querySelector(".one-0" ).classList.remove("active");
    document.querySelector(".one-0").classList.add("active");

}