<script>
  import { _ } from 'svelte-i18n';
</script>

<section id="about" class="section-padding bg-gray-50 dark:bg-gray-800 px-7">
  <div class="max-width-container">
    <h2 class="text-3xl font-bold text-center py-2 mt-3">{`A Human. Love to Nurture Data behind so called AI.` || $_('about.title')}</h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-lg mb-6">
          {`
          AI & Data Addict with approximately a year of Professional experience 
          and more than two years on related projects through my days as student.
           Focused more on the Data Quality, Data Governance, and Metadata Management.
            But also able to do end to end of data analysis or data science process ranging from
             Database Query, Reporting, Machine Learning, Deep Learning, etc.
              Hold Microsoft Azure Certified Fundamentals for Cloud, Artificial Intelligence, and Data field.
               Furthermore, also familiar quite a bit with
                Google Cloud Platform (GCP), Airflow, DBT, Kafka, SQL Server Management, & Data Architecture.`|| $_('about.description')}
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