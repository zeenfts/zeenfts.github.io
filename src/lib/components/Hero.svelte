<script>
  import { _ } from 'svelte-i18n';
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' }
  ];
</script>

<section id="home" class="section-padding pt-32">
  <div class="max-width-container">
    <div class="text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        {$_('hero.greeting')} <span class="text-spring-accent">Your Name</span>
      </h1>
      <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        {$_('hero.title')}
      </p>
      <p class="text-lg max-w-2xl mx-auto mb-8">
        {$_('hero.description')}
      </p>
      
      <!-- Social Links -->
      <div class="flex justify-center space-x-6">
        {#each socialLinks as link}
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-spring-accent transition-colors"
          >
            <span class="sr-only">{link.name}</span>
            <!-- Add SVG icons here -->
            <div class="w-6 h-6 bg-current"></div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>