<script>
  import { _ } from 'svelte-i18n';
  import { locale } from 'svelte-i18n';
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  let theme = 'winter';
  let isDark = false;
  let currentLang = 'en';
  
  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#portfolio', label: 'portfolio' },
    { href: '#articles', label: 'articles' },
    { href: '#contact', label: 'contact' }
  ];
  
  const themes = ['winter', 'spring', 'summer', 'autumn'];
  
  const languages = [
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'id', name: 'ID', flag: '🇮🇩' }
  ];
  
  function scrollToSection(e, href) {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen = false;
  }
  
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
  
  // Remove all theme classes
  root.className = root.className.replace(/\b(winter|spring|summer|autumn)\b/g, '');
  
  // Add current theme class
  root.classList.add(theme);
  
  // Handle dark mode
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // Save preferences
  localStorage.setItem('theme', theme);
  localStorage.setItem('isDark', isDark);
}

  function changeLanguage(lang) {
    currentLang = lang;
    locale.set(lang);
    localStorage.setItem('language', lang);
  }
  
  onMount(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'winter';
    const savedIsDark = localStorage.getItem('isDark') === 'true';
    
    isDark = savedIsDark;
    theme = savedTheme.replace('-dark', '');
    updateTheme();
    
    // Load saved language
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    locale.set(savedLang);
  });
</script>

<nav class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
  <div class="max-width-container px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo/Name -->
      <a href="/" class="font-bold text-xl">IMDFGM</a>
      
      <!-- Center: Navigation Items (Desktop) -->
      <div class="hidden md:flex space-x-8">
        {#each navItems as item}
          <a 
            href={item.href} 
            on:click={(e) => scrollToSection(e, item.href)}
            class="winter:hover:text-winter-accent
            spring:hover:text-spring-accent
            summer:hover:text-summer-accent
            autumn:hover:text-autumn-accent
            transition-colors"
          >
            {$_(item.label) || item.label}
          </a>
        {/each}
      </div>
      
      <!-- Right: Theme & Language Controls (Desktop) -->
      <div class="hidden md:flex items-center space-x-4">
        <!-- Season Selector -->
        <select 
          bind:value={theme}
          on:change={(e) => setSeasonTheme(e.target.value)}
          class="text-sm px-2 py-1 rounded border dark:text-gray-800 fill-emerald-50
          winter:border-winter-secondary
          spring:border-spring-secondary
          summer:border-summer-secondary
          autumn:border-autumn-secondary
          dark:winter:bg-winter-accent
          dark:spring:bg-spring-accent
          dark:summer:bg-summer-accent
          dark:autumn:bg-autumn-accent
          dark:winter:border-winter-dark
          dark:spring:border-spring-dark
          dark:summer:border-summer-dark
          dark:autumn:border-autumn-dark"
        >
          {#each themes as season}
            <option value={season}>{season.charAt(0).toUpperCase() + season.slice(1)}</option>
          {/each}
        </select>
        
        <!-- Dark/Light Toggle -->
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
        
        <!-- Language Selector -->
        <div class="flex space-x-1">
          {#each languages as lang}
            <button
              on:click={() => changeLanguage(lang.code)}
              class={`px-2 py-1 text-sm rounded ${
                currentLang === lang.code 
                  ? 'winter:bg-winter-accent spring:bg-spring-accent summer:bg-summer-accent autumn:bg-autumn-accent text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {lang.flag} {lang.name}
            </button>
          {/each}
        </div>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden"
        on:click={() => isMenuOpen = !isMenuOpen}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 space-y-4">
        <!-- Navigation Items -->
        {#each navItems as item}
          <a 
            href={item.href} 
            on:click={(e) => scrollToSection(e, item.href)}
            class="block py-2 hover:text-spring-accent transition-colors"
          >
            {$_(item.label) || item.label}
          </a>
        {/each}
        
        <div class="pt-4 border-t dark:border-gray-700 space-y-3">
          <!-- Theme Controls -->
          <div class="flex items-center justify-between">
            <span class="text-sm">Theme:</span>
            <select 
              bind:value={theme}
              on:change={() => updateTheme()}
              class="text-sm px-2 py-1 rounded border dark:bg-gray-800 dark:border-gray-700"
            >
              {#each themes as season}
                <option value={season}>{season.charAt(0).toUpperCase() + season.slice(1)}</option>
              {/each}
            </select>
          </div>
          
          <!-- Dark Mode Toggle -->
          <div class="flex items-center justify-between">
            <span class="text-sm">Dark Mode:</span>
            <button
              on:click={toggleTheme}
              class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
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
          </div>
          
          <!-- Language Selector -->
          <div class="flex items-center justify-between">
            <span class="text-sm">Language:</span>
            <div class="flex space-x-1">
              {#each languages as lang}
                <button
                  on:click={() => changeLanguage(lang.code)}
                  class={`px-2 py-1 text-sm rounded ${
                    currentLang === lang.code 
                      ? 'bg-spring-accent text-white' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {lang.flag} {lang.name}
                </button>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</nav>