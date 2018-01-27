var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


hideDice();
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//callback
// document.querySelector('.btn-roll').addEventListener('click', btn);

// Anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {

    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if(dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        hideDice();
        toggleClass('.player-' + activePlayer + '-panel', 'active');
        toggleClass('.player-' + activePlayer + '-panel', 'winner');
    } else {
        nextPlayer();
    }
});

function toggleClass(selector,classToToggle) {
    document.querySelector(selector).classList.toggle(classToToggle);
}

function hideDice() {
    document.querySelector('.dice').style.display = 'none';
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
