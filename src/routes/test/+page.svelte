<script>
  import { onMount } from 'svelte';
  
  let currentTheme = 'winter';
  let isDark = false;
  
  function applyTheme(theme, dark = false) {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('winter', 'spring', 'summer', 'autumn', 'dark');
    
    // Add new theme
    root.classList.add(theme);
    if (dark) {
      root.classList.add('dark');
    }
    
    currentTheme = theme;
    isDark = dark;
  }
  
  onMount(() => {
    // Start with winter light theme
    applyTheme('winter', false);
  });

  // Update debug info
  onMount(() => {
    const updateDebugInfo = () => {
      const htmlClasses = document.getElementById('html-classes');
      if (htmlClasses) {
        htmlClasses.textContent = document.documentElement.className;
      }
    };
    
    updateDebugInfo();
    
    // Update whenever classes change
    const observer = new MutationObserver(updateDebugInfo);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    // Log versions
    console.log('To check Tailwind version, run: npm list tailwindcss');
    
    return () => observer.disconnect();
  });
</script>

<div class="min-h-screen p-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
  <div class="max-w-6xl mx-auto space-y-8">
    <h1 class="text-4xl font-bold">Theme Test Page - Tailwind CSS 3.4+</h1>
    
    <!-- Theme Controls -->
    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 sticky top-0 z-10">
      <h2 class="text-2xl font-semibold mb-4">Theme Controls</h2>
      
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 class="font-medium mb-2">Season Theme:</h3>
          <div class="flex flex-wrap gap-2">
            {#each ['winter', 'spring', 'summer', 'autumn'] as theme}
              <button
                on:click={() => applyTheme(theme, isDark)}
                class={`px-4 py-2 rounded transition-colors ${
                  currentTheme === theme 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {theme}
              </button>
            {/each}
          </div>
        </div>
        
        <div>
          <h3 class="font-medium mb-2">Mode:</h3>
          <button
            on:click={() => applyTheme(currentTheme, !isDark)}
            class="px-6 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>
      
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Current: <span class="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{currentTheme} - {isDark ? 'Dark' : 'Light'}</span>
      </p>
    </div>
    
    <!-- Static Color Tests with Dark Mode -->
    <div class="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 class="text-2xl font-semibold">Static Tailwind Classes (with Dark Mode)</h2>
      
      <!-- Winter Colors -->
      <div class="space-y-3">
        <h3 class="font-medium text-lg">Winter Theme:</h3>
        <div class="grid grid-cols-2 gap-4">
          <!-- Light mode colors -->
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Light Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-winter-primary p-4 rounded border">bg-winter-primary</div>
              <div class="bg-winter-secondary p-4 rounded border">bg-winter-secondary</div>
              <div class="bg-winter-accent text-white p-4 rounded">bg-winter-accent</div>
              <div class="bg-winter-dark text-white p-4 rounded">bg-winter-dark</div>
            </div>
          </div>

          <!-- Dark mode colors -->
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Dark Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-winter-dark p-4 rounded text-gray-900 dark:text-white">
                bg-gray-100 dark:bg-winter-dark
              </div>
              <div class="text-gray-900 dark:text-winter-primary p-4 rounded border">
                text-gray-900 dark:text-winter-primary
              </div>
              <div class="border-gray-300 dark:border-winter-accent border-2 p-4 rounded">
                border-gray-300 dark:border-winter-accent
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Spring Colors -->
      <div class="space-y-3">
        <h3 class="font-medium text-lg">Spring Theme:</h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Light Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-spring-primary p-4 rounded border">bg-spring-primary</div>
              <div class="bg-spring-secondary p-4 rounded border">bg-spring-secondary</div>
              <div class="bg-spring-accent text-white p-4 rounded">bg-spring-accent</div>
            </div>
          </div>
          
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Dark Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-spring-dark p-4 rounded text-gray-900 dark:text-white">
                bg-gray-100 dark:bg-spring-dark
              </div>
              <div class="text-gray-900 dark:text-spring-primary p-4 rounded border">
                text-gray-900 dark:text-spring-primary
              </div>
              <div class="border-gray-300 dark:border-spring-accent border-2 p-4 rounded">
                border-gray-300 dark:border-spring-accent
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summer Colors -->
      <div class="space-y-3">
        <h3 class="font-medium text-lg">Summer Theme:</h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Light Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-summer-primary p-4 rounded border">bg-summer-primary</div>
              <div class="bg-summer-secondary p-4 rounded border">bg-summer-secondary</div>
              <div class="bg-summer-accent text-white p-4 rounded">bg-summer-accent</div>
            </div>
          </div>
          
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Dark Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-summer-dark p-4 rounded text-gray-900 dark:text-white">
                bg-gray-100 dark:bg-summer-dark
              </div>
              <div class="text-gray-900 dark:text-summer-primary p-4 rounded border">
                text-gray-900 dark:text-summer-primary
              </div>
              <div class="border-gray-300 dark:border-summer-accent border-2 p-4 rounded">
                border-gray-300 dark:border-summer-accent
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Autumn Colors -->
      <div class="space-y-3">
        <h3 class="font-medium text-lg">Autumn Theme:</h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Light Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-autumn-primary p-4 rounded border">bg-autumn-primary</div>
              <div class="bg-autumn-secondary p-4 rounded border">bg-autumn-secondary</div>
              <div class="bg-autumn-accent text-white p-4 rounded">bg-autumn-accent</div>
            </div>
          </div>
          
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Dark Mode Classes:</p>
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-autumn-dark p-4 rounded text-gray-900 dark:text-white">
                bg-gray-100 dark:bg-autumn-dark
              </div>
              <div class="text-gray-900 dark:text-autumn-primary p-4 rounded border">
                text-gray-900 dark:text-autumn-primary
              </div>
              <div class="border-gray-300 dark:border-autumn-accent border-2 p-4 rounded">
                border-gray-300 dark:border-autumn-accent
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <!-- Dynamic CSS Variables Test -->
    <div class="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 class="text-2xl font-semibold">Dynamic CSS Variables Approach</h2>
      
      <div class="grid grid-cols-2 gap-6">
        <!-- CSS Variables Display -->
        <div>
          <h3 class="font-medium mb-3">CSS Variables:</h3>
          <div class="space-y-2 font-mono text-sm">
            <div class="p-3 rounded border" style="background-color: var(--primary, #E6F2FF);">
              --primary
            </div>
            <div class="p-3 rounded border" style="background-color: var(--secondary, #B3D9FF);">
              --secondary
            </div>
            <div class="p-3 rounded border text-white" style="background-color: var(--accent, #6BB6FF);">
              --accent
            </div>
            <div class="p-3 rounded border" style="background-color: var(--bg-primary, #FFFFFF); color: var(--text-primary, #1A365D);">
              --bg-primary / --text-primary
            </div>
          </div>
        </div>
        
        <!-- Theme-based Classes -->
        <div>
          <h3 class="font-medium mb-3">Theme Utility Classes:</h3>
          <div class="space-y-2">
            <div class="bg-theme-primary p-3 rounded border">bg-theme-primary</div>
            <div class="bg-theme-secondary p-3 rounded border">bg-theme-secondary</div>
            <div class="bg-theme-accent text-white p-3 rounded">bg-theme-accent</div>
            <div class="text-theme-text p-3 rounded border">text-theme-text</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Component Examples -->
    <div class="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 class="text-2xl font-semibold">Real Component Examples</h2>
      
      <div class="grid grid-cols-2 gap-6">
        <!-- Static Approach -->
        <div>
          <h3 class="font-medium mb-3">Static Classes:</h3>
          <button class="w-full bg-spring-accent dark:bg-spring-dark text-white px-6 py-3 rounded hover:opacity-90 transition-opacity">
            Button with spring colors
          </button>
          <div class="mt-3 p-4 bg-winter-primary dark:bg-winter-dark rounded">
            Card with winter colors
          </div>
        </div>
        
        <!-- Dynamic Approach -->
        <div>
          <h3 class="font-medium mb-3">Dynamic Classes:</h3>
          <button class="w-full bg-theme-accent text-white px-6 py-3 rounded hover:opacity-90 transition-opacity">
            Button with theme-accent
          </button>
          <div class="mt-3 p-4 bg-theme-secondary rounded">
            Card with theme-secondary
          </div>
        </div>
      </div>
    </div>
    
    <!-- Debug Info -->
    <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
      <h3 class="font-medium mb-2">Debug Info:</h3>
      <div class="text-sm font-mono space-y-1">
        <p>HTML Classes: <span id="html-classes" class="text-xs"></span></p>
        <p>Check console for package versions</p>
      </div>
    </div>
  </div>
</div>