<script>
  import { _ } from 'svelte-i18n';
  
  const socialLinks = [
    { 
      name: 'GitHub',
      url: 'https://github.com/zeenfts',
      icon: `<img width="100" height="100" src="https://img.icons8.com/fluency/100/github.png" alt="github"/>`
    },
    { 
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/difagama',
      icon: `<img width="100" height="100" src="https://img.icons8.com/fluency/100/linkedin.png" alt="linkedin"/>`
    },
    { 
      name: 'Email',
      url: 'mailto:imdifagama@gmail.com',
      icon: `<img width="100" height="100" src="https://img.icons8.com/fluency/100/gmail-new.png" alt="gmail"/>`
    },
  ];
</script>

<section id="home" class="section-padding pt-32 mx-7">
  <div class="max-width-container pb-9">
    <div class="text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        {$_('hero.greeting')} <span class="
        winter:text-winter-accent spring:text-spring-accent summer:text-summer-accent autumn:text-autumn-accent
        dark:winter:text-winter-secondary dark:spring:text-spring-secondary
        dark:summer:text-summer-secondary dark:autumn:text-autumn-secondary"
        >{$_('all.name')}</span>
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
            class="text-gray-500 dark:text-gray-200 transition-colors
            winter:hover:text-winter-accent
            spring:hover:text-spring-accent
            summer:hover:text-summer-accent
            autumn:hover:text-autumn-accent
            dark:winter:hover:text-winter-secondary
            dark:spring:hover:text-spring-secondary
            dark:summer:hover:text-summer-secondary
            dark:autumn:hover:text-autumn-secondary"
          >
            <span class="sr-only">{link.name}</span>
            <!-- Add SVG icons here -->
            <!-- <img src="%sveltekit.assets%/{link.icon}.svg" />   -->
            <div class="w-11 h-11 bg-current rounded-lg">{@html link.icon}</div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>