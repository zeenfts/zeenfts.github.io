<script>
  import { _ } from 'svelte-i18n';
  
  const articles = [
    {
      title: 'Singapore, Malaysia, & Vietnam: Tourist Attraction Itinerary Made Easy with Google Cloud Platform Places API',
      date: '2024-07-22',
      excerpt: 'A comprehensive guide to planning a tourist itinerary in Singapore, Malaysia, and Vietnam using Google Cloud Platform\'s Places API.',
      readTime: '8 min read',
      link: 'https://medium.com/@imdifagama/singapore-malaysia-vietnam-tourist-attraction-itinerary-made-easy-with-google-cloud-platform-0f53b5f7b11d'
    },
    {
      title: 'The Vision of Unlimited Learning: A Renaissance Dream for AI',
      date: '2024-07-10',
      excerpt: 'Exploring the potential of AI to revolutionize education and learning experiences.',
      readTime: '4 min read',
      link: 'https://medium.com/@imdifagama/the-vision-of-unlimited-learning-a-renaissance-dream-for-artificial-intelligence-ab3ee8ba496c'
    },
    {
      title: 'Beautifully Draw Area Near the Capital City of each Province in Indonesia using Contextily',
      date: '2024-06-13',
      excerpt: 'A guide on how to visualize areas near the capital city of each province in Indonesia using Contextily in Python.',
      readTime: '3 min read',
      link: 'https://medium.com/@imdifagama/beautifully-know-area-near-the-capital-city-of-each-province-in-indonesia-using-contextily-in-98ddcd51a565'
    },
    {
      title: 'Beginner Ways to Automate Your Python Function Loop Testing using Unittest',
      date: '2024-04-27',
      excerpt: 'A beginner-friendly guide to automating function loop testing in Python using the unittest framework.',
      readTime: '6 min read',
      link: 'https://medium.com/@imdifagama/beginner-ways-to-automate-your-python-function-loop-testing-using-unittest-08714b62b0ff'
    },
    {
      title: 'Marketing Analysis using Recency, Frequency, Monetary (RFM) in Python',
      date: '2020-08-07',
      excerpt: 'An in-depth guide on how to perform marketing analysis using RFM metrics in Python for Quantium.',
      readTime: '8 min read',
      link: 'https://medium.com/@imdifagama/quantium-data-analytics-virtual-program-part-1-insidesherpa-3b45076c0cc5'
    }
  ];
  
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
</script>

<section id="articles" class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="max-width-container px-7 py-12">
    <h2 class="text-3xl font-bold text-center mb-12">{$_('articles.title') || 'Articles'}</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each articles as article}
        <article class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {formatDate(article.date)} • {article.readTime}
          </div>
          
          <h3 class="text-xl font-semibold mb-3">
            <a href={article.link} class="hover:text-spring-accent transition-colors" target="_blank">
              {article.title}
            </a>
          </h3>
          
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {article.excerpt}
          </p>
          
          <a 
            href={article.link} 
            class="inline-flex items-center text-spring-accent hover:text-spring-dark transition-colors"
            target="_blank"
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