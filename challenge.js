/*
1. Player loose his entire score when he rolls two 6 on a roy. After that, it's next player's
turn.
2. Add an input field to the HTML where players can set the winning score, so they can change
the predefined score of 100.
3. Add another dice to the game, so that there are two dice now. The player looses his Current
score when one of them is 1.
*/

var scores, roundScore, activePlayer, gamePlaying, skip;
var prevDices = [];

init();


// Anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {
    var dices = [];
    if (gamePlaying) {
        for (var i = 0; i < 2; i++) {
            dices[i] = Math.floor(Math.random() * 6) + 1;
            if(dices[i] === 1 || (dices[i] === 6 && prevDices[i] === 6)) {
                skip = true;
            }
        }

        updateDice('.dice', dices[0]);
        updateDice('.second-dice', dices[1]);

        if(!skip) {
            roundScore += (dices[0] + dices[1]);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prevDices = [dices[0], dices[1]];
        } else {
            prevDices = [0, 0];
            skip = false;
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var winningScore = document.querySelector('.winning-score').value;
        winningScore = winningScore ? winningScore : 100;

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            hideDice();
            toggleClass('.player-' + activePlayer + '-panel', 'active');
            toggleClass('.player-' + activePlayer + '-panel', 'winner');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0 , 0];
    activePlayer = 0;
    roundScore = 0;

    hideDice();
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.winning-score').value = '';
    gamePlaying = true;

}

function toggleClass(selector,classToToggle) {
    document.querySelector(selector).classList.toggle(classToToggle);
}

function hideDice() {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.second-dice').style.display = 'none';

}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    toggleClass('.player-0-panel', 'active');
    toggleClass('.player-1-panel', 'active');

    hideDice();
}

function updateDice(selector, value) {
    var diceDOM = document.querySelector(selector);
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + value + '.png';
}
