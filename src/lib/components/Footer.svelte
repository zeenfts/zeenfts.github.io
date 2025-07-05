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
      { name: 'GitHub', url: 'https://github.com/zeenfts' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/difagama' },
      { name: 'Gmail', url: 'mailto:imdifagama@gmail.com' },
      { name: 'Kaggle', url: 'https://www.kaggle.com/zeeniye' },
      { name: 'Etsy', url: 'https://www.etsy.com/shop/tibreezarts' },
      { name: 'Goodreads', url: 'https://www.goodreads.com/user/show/118784889-muhammad-d-ivanka' },
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
    <div class="grid px-7 md:grid-cols-3 gap-11">
      <!-- About Section -->
      <div>
        <h3 class="font-bold text-lg mb-4">{$_('all.name')}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          {$_('hero.description') || 'I am a Tech Enthusiast with a passion for creating innovative solutions.'}
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