<script>
  import { _ } from 'svelte-i18n';
  
  const projects = [
    {
      title: 'Vast Data AI Vault Quest',
      description: 'An interactive text-based adventure game inspired by Elmwood Trail',
      tech: ['JavaScript', 'Svelte', 'TailwindCSS'],
      link: '#',
      featured: true
    },
    {
      title: 'Project Two',
      description: 'Description of your second project',
      tech: ['Node.js', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Description of your third project',
      tech: ['React', 'TypeScript', 'GraphQL'],
      link: '#'
    }
  ];
</script>

<section id="portfolio" class="section-padding">
  <div class="max-width-container px-7">
    <h2 class="text-3xl font-bold text-center mb-12">{'See through some of my Portfolios' || $_('portfolio.title')}</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
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