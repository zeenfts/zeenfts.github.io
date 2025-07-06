<script>
  import { _ } from 'svelte-i18n';
  
  const projects = [
    {
      title: 'Customer Lifetime Value Prediction',
      description: 'This project involves predicting the lifetime value of customers in the luxury car market using machine learning techniques. It covers data preprocessing, model training, and evaluation.',
      tech: ['Python', 'Regression', 'CLV', 'Machine Learning'],
      link: 'https://github.com/zeenfts/luxury-cars-insurance-clv-regression',
      featured: true
    },
    {
      title: 'Animal Images Classification',
      description: 'A project focused on classifying images of animals using deep learning techniques. It includes data augmentation, model training, and performance evaluation.',
      tech: ['Deep Learning', 'Image Classification', 'Python'],
      link: 'https://github.com/zeenfts/animals-detection-cnn/blob/main/images_classif.ipynb'
    },
    {
      title: 'Dashboard Visualization',
      description: 'This project showcases the creation of interactive dashboards using Tableau to visualize data insights. It includes various datasets and visualizations to help understand trends and patterns.',
      tech: ['Tableau', 'Data Visualization', 'Dashboard'],
      link: 'https://public.tableau.com/app/profile/difagama/vizzes'
    }
  ];
</script>

<section id="portfolio" class="section-padding">
  <div class="max-width-container px-7 py-12">
    <h2 class="text-3xl font-bold text-center mb-12">{$_('portfolio.title') || 'Portfolios'}</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {#each projects as project}
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              <a href={project.link} class="hover:text-autumn-accent transition-colors" target="_blank">
                {project.title}
              </a>
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tech as tech}
                <span class="px-2 py-1 bg-autumn-secondary/20 text-autumn-dark dark:text-autumn-secondary rounded text-sm">
                  {tech}
                </span>
              {/each}
            </div>
            
            <a 
              href={project.link} 
              class="inline-flex items-center text-autumn-accent hover:text-autumn-dark transition-colors"
              target="_blank"
            >
              View Project
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>