<script>
  import { _ } from 'svelte-i18n';
  
  const articles = [
    {
      title: 'Building Interactive Games with Svelte',
      date: '2024-01-15',
      excerpt: 'Learn how to create engaging browser-based games using Svelte and modern web technologies.',
      readTime: '5 min read',
      link: '#'
    },
    {
      title: 'The Art of Minimalist Web Design',
      date: '2024-01-10',
      excerpt: 'Exploring the principles of minimalist design in modern web development.',
      readTime: '3 min read',
      link: '#'
    },
    {
      title: 'Full-Stack Development in 2024',
      date: '2024-01-05',
      excerpt: 'A comprehensive guide to modern full-stack development tools and practices.',
      readTime: '8 min read',
      link: '#'
    }
  ];
  
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
</script>

<section id="articles" class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="max-width-container px-7">
    <h2 class="text-3xl font-bold text-center mb-12">{'Read on a Few of my Articles' || $_('articles.title')}</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each articles as article}
        <article class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {formatDate(article.date)} • {article.readTime}
          </div>
          
          <h3 class="text-xl font-semibold mb-3">
            <a href={article.link} class="hover:text-spring-accent transition-colors">
              {article.title}
            </a>
          </h3>
          
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {article.excerpt}
          </p>
          
          <a 
            href={article.link} 
            class="inline-flex items-center text-spring-accent hover:text-spring-dark transition-colors"
          >
            Read More
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>