<script>
  import { _ } from 'svelte-i18n';
</script>

<section id="about" class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="max-width-container px-7 py-9">
    <h2 class="text-3xl font-bold text-center pb-7">{$_('about.title') || 'About'}</h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-lg mb-6">
          {$_('about.description')}
        </p>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold mb-2">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              {#each ['Svelte', 'React', 'Vue', 'TailwindCSS'] as skill}
                <span class="px-3 py-1 bg-spring-secondary dark:bg-spring-dark rounded-full text-sm">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Backend</h3>
            <div class="flex flex-wrap gap-2">
              {#each ['Node.js', 'Express', 'Python', 'PostgreSQL'] as skill}
                <span class="px-3 py-1 bg-summer-secondary dark:bg-summer-dark rounded-full text-sm">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Experiences:</h3>
            <div class="flex gap-2">
              {#each [
                'Data Specialist 2021-Present', 'Data Engineer 2023-2024',
                'Data Advisor 2020-2021', 'Practicum Assistant 2020-2021'
                ] as exprsnce}
                <ul class="list-disc pl-5">
                  <li>{exprsnce}</li>
                </ul>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="aspect-square bg-gradient-to-br from-spring-accent to-summer-accent rounded-lg"></div>
      </div>
    </div>
  </div>
</section>