// Game state variables
let currentState = 'start';
let attempts = 0;
let visited = new Set();
let health = 100;

// Update health bar
function updateHealth(damage = 0) {
    health = Math.max(0, health - damage);
    const healthFill = document.getElementById('health-fill');
    if (healthFill) {
        healthFill.style.width = `${health}%`;
        healthFill.style.backgroundColor = health > 60 ? '#00ff00' : 
                                         health > 30 ? '#ffa500' : '#ff0000';
    }
}

// Main game update function
function updateGame() {
    const state = gameStates[currentState];
    const gameText = document.getElementById('game-text');

    // // Check for game over first
    // if (health <= 0) {
    //     gameText.innerHTML = '<div class="game-over-screen">GAME OVER</div>';
    //     choicesDiv.innerHTML = '<button onclick="resetGame()">Start New Game</button>';
    //     return;
    // }
    
    if (!state) {
        console.error('Invalid state:', currentState);
        return;
    }
    
    // Update game text with appropriate styling
    if (state.isGameOver) {
        gameText.innerHTML = `<div class="game-over">${state.text}</div>`;
        // gameText.innerHTML = '<div class="game-over-screen">GAME OVER</div>';
        choicesDiv.innerHTML = '<button onclick="resetGame()">Start New Game</button>';
        attempts++;
        visited.clear();
        health = 100;
    } else if (state.isSuccess) {
        gameText.innerHTML = `<div class="success">${state.text}</div>`;
    } else {
        gameText.innerText = state.text;
        if (state.damage) {
            updateHealth(state.damage);
        }
    }
    
    // Update choices
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    state.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            if (health <= 0) {
                currentState = 'start';
                health = 100;
            } else {
                currentState = choice.nextState;
            }
            updateGame();
        };
        choicesDiv.appendChild(button);
    });

    // Update health bar
    updateHealth(0);
    
    // Update stats
    const statsDiv = document.getElementById('stats');
    if (statsDiv) {
        statsDiv.innerHTML = `Attempts: ${attempts} | Rooms Explored: ${visited.size} | System Integrity: ${health}%`;
    }
}

// GameOver Function if the Health is Zero (5 attempts)
function resetGame() {
    currentState = 'start';
    health = 100;
    attempts++;
    visited.clear();
    updateGame();
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Game initialized'); // Debug log
    updateGame();
});

// Add error handling for script loading
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ', msg, '\nURL: ', url, '\nLine: ', lineNo, '\nColumn: ', columnNo, '\nError: ', error);
    return false;
};