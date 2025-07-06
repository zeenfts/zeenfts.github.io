<script>
  import { onMount } from 'svelte';
  import { gameStates } from '$lib/gameStates.js';
  
  let isOpen = false;
  let currentState = 'start';
  let health = 100;
  let attempts = 0;
  let visited = new Set();
  
  function updateHealth(damage = 0) {
    health = Math.max(0, health - damage);
  }
  
  function handleChoice(nextState) {
    currentState = nextState;
    const state = gameStates[currentState];
    if (state.damage) {
      updateHealth(state.damage);
    }
    if (health <= 0) {
      currentState = 'gameOver';
    }
  }
  
  function resetGame() {
    currentState = 'start';
    health = 100;
    attempts++;
    visited.clear();
  }
  
  $: currentGameState = gameStates[currentState];
</script>

<div class="fixed bottom-4 left-4 z-40">
  <button
    on:click={() => isOpen = !isOpen}
    class="
    winter:bg-spring-accent winter:hover:bg-spring-dark
    spring:bg-winter-accent spring:hover:bg-winter-dark
    summer:bg-autumn-accent summer:hover:bg-autumn-dark
    autumn:bg-summer-accent autumn:hover:bg-summer-dark
    text-white p-3 rounded-full shadow-lg transition-all"
  >
    <svg class="w-9 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  </button>
  
  {#if isOpen}
    <div class="absolute bottom-20 left-0 w-80 sm:w-96 bg-black border-2 border-green-500 rounded-lg shadow-2xl p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-green-500 font-mono">VAST DATA AI VAULT QUEST</h3>
        <button 
          on:click={() => isOpen = false}
          class="text-green-500 hover:text-green-300"
        >
          ×
        </button>
      </div>
      
      <!-- Health Bar -->
      <div class="mb-4">
        <div class="text-green-500 text-sm mb-1">System Integrity: {health}%</div>
        <div class="w-full bg-gray-800 rounded-full h-2">
          <div 
            class="h-full rounded-full transition-all"
            class:bg-green-500={health > 60}
            class:bg-yellow-500={health > 30 && health <= 60}
            class:bg-red-500={health <= 30}
            style="width: {health}%"
          ></div>
        </div>
      </div>
      
      <!-- Game Text -->
      <div class="text-green-500 font-mono text-sm mb-4 p-3 border border-green-500 rounded min-h-[100px]">
        {currentGameState.text}
      </div>
      
      <!-- Choices -->
      <div class="space-y-2">
        {#each currentGameState.choices as choice}
          <button
            on:click={() => handleChoice(choice.nextState)}
            class="w-full text-left text-green-500 border border-green-500 p-2 rounded hover:bg-green-500 hover:text-black transition-all font-mono text-sm"
          >
            {choice.text}
          </button>
        {/each}
      </div>
      
      <!-- Stats -->
      <div class="text-green-500 text-xs mt-4 pt-4 border-t border-green-500">
        Attempts: {attempts} | Rooms Explored: {visited.size}
      </div>
    </div>
  {/if}
</div>