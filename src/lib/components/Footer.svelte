<script>
  import { _ } from 'svelte-i18n';
  
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    quickLinks: [
      { href: '#home', label: 'home' },
      { href: '#about', label: 'about' },
      { href: '#portfolio', label: 'portfolio' },
      { href: '#articles', label: 'articles' },
      { href: '#contact', label: 'contact' }
    ],
    social: [
      { name: 'GitHub', url: 'https://github.com/yourusername' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
      { name: 'Twitter', url: 'https://twitter.com/yourusername' }
    ]
  };
  
  function scrollToSection(e, href) {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<footer class="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800">
  <div class="max-width-container px-4 py-12">
    <div class="grid md:grid-cols-3 gap-8">
      <!-- About Section -->
      <div>
        <h3 class="font-bold text-lg mb-4">Your Name</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          Full Stack Developer & Digital Artist crafting elegant solutions with code and creativity.
        </p>
      </div>
      
      <!-- Quick Links -->
      <div>
        <h3 class="font-bold text-lg mb-4">{$_('footer.quick_links') || 'Quick Links'}</h3>
        <ul class="space-y-2">
          {#each footerLinks.quickLinks as link}
            <li>
              <a 
                href={link.href} 
                on:click={(e) => scrollToSection(e, link.href)}
                class="text-gray-600 dark:text-gray-400 hover:text-spring-accent text-sm transition-colors"
              >
                {$_(link.label) || link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Connect -->
      <div>
        <h3 class="font-bold text-lg mb-4">{$_('footer.connect') || 'Connect'}</h3>
        <ul class="space-y-2">
          {#each footerLinks.social as link}
            <li>
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 dark:text-gray-400 hover:text-spring-accent text-sm transition-colors"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
    <!-- Copyright -->
    <div class="mt-8 pt-8 border-t dark:border-gray-800 text-center">
      <p class="text-gray-600 dark:text-gray-400 text-sm">
        Copyright © 2024 - {currentYear}. IMDFGM. {$_('footer.rights') || 'All rights reserved.'}
      </p>
    </div>
  </div>
</footer>