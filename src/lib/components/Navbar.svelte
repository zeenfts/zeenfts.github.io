<script>
  import { _ } from 'svelte-i18n';
  
  let isMenuOpen = false;
  
  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#portfolio', label: 'portfolio' },
    { href: '#articles', label: 'articles' },
    { href: '#contact', label: 'contact' }
  ];
  
  function scrollToSection(e, href) {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen = false;
  }
</script>

<nav class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
  <div class="max-width-container">
    <div class="flex justify-between items-center h-16">
      <a href="/" class="font-bold text-xl">Your Name</a>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        {#each navItems as item}
          <a 
            href={item.href} 
            on:click={(e) => scrollToSection(e, item.href)}
            class="hover:text-spring-accent transition-colors"
          >
            {$_(item.label)}
          </a>
        {/each}
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
      <div class="md:hidden py-4">
        {#each navItems as item}
          <a 
            href={item.href} 
            on:click={(e) => scrollToSection(e, item.href)}
            class="block py-2 hover:text-spring-accent transition-colors"
          >
            {$_(item.label)}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</nav>
