<script>
  import { onMount } from 'svelte';
  import { locale } from 'svelte-i18n';
  
  let theme = 'winter';
  let isDark = false;
  let currentLang = 'en';
  
  const themes = {
    light: ['winter', 'spring', 'summer', 'autumn'],
    dark: ['winter-dark', 'spring-dark', 'summer-dark', 'autumn-dark']
  };
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' }
  ];
  
  function toggleTheme() {
    isDark = !isDark;
    updateTheme();
  }
  
  function setSeasonTheme(season) {
    theme = season;
    updateTheme();
  }
  
  function updateTheme() {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    
    // Update CSS variables based on season
    if (theme === 'winter') {
      root.style.setProperty('--primary', isDark ? '#1A365D' : '#E6F2FF');
    }
    // Add more season-specific styles
    
    // Save theme preference
    localStorage.setItem('theme', isDark ? `${theme}-dark` : theme);
  }
  
  function changeLanguage(lang) {
    currentLang = lang;
    locale.set(lang);
    localStorage.setItem('language', lang);
  }
  
  onMount(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark = savedTheme.includes('dark');
      theme = savedTheme.replace('-dark', '');
    }
    
    // Load saved language
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    locale.set(savedLang);
    
    updateTheme();
  });
</script>

<div class="fixed top-20 right-4 z-40 space-y-2 pr-7">
  <!-- Theme Toggle -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
    <button
      on:click={toggleTheme}
      class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {#if isDark}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      {:else}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      {/if}
    </button>
    
    <!-- Season Selector -->
    <div class="border-t pt-2 mt-2 space-y-1">
      {#each ['winter', 'spring', 'summer', 'autumn'] as season}
        <button
          on:click={() => setSeasonTheme(season)}
          class={`w-full text-left px-2 py-1 rounded text-sm ${
            theme === season ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {season.charAt(0).toUpperCase() + season.slice(1)}
        </button>
      {/each}
    </div>
  </div>
  
  <!-- Language Selector -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
    <div class="space-y-1">
      {#each languages as lang}
        <button
          on:click={() => changeLanguage(lang.code)}
          class={`w-full text-left px-2 py-1 rounded text-sm flex items-center space-x-2 ${
            currentLang === lang.code ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
        </button>
      {/each}
    </div>
  </div>
</div>